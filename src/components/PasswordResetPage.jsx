import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/PasswordResetPage.css'
import greenKey from '../assets/green-key.png'

export default function PasswordResetPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const [uidErrorPopup, setUidErrorPopup] = useState(false)

  const authContext = useAuth();
  const navigate = useNavigate();
  const { uid: urlUID } = useParams();

  useEffect(() => {
    const checkUIDValidity = async () => {
      try {
        const response = await authContext.checkUidValidation(urlUID);
        if (response.status === 200) {
          setEmail(response.data)
         } else {
          //TODO: Sacar esta alert
          setUidErrorPopup(true)
          alert("El link que quisiste acceder ya no existe.")
          navigate(`/`)
        }
      } catch (error) {
        console.error('Error verifying UID:', error);
      }
    };
      checkUIDValidity()
  }, [urlUID]);


  const handleSubmit = async () => {
    setErrorMessage('')
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const changePasswordResponse = await authContext.resetPassword(email, password, urlUID)
      if(changePasswordResponse.status === 200) {
        setSuccessMessage('Contraseña cambiada exitosamente !')
        console.log(urlUID)
      } else {
        setErrorMessage('Este link expiró o fue usado')
      }
    } catch(error) {
      console.log(error)
    }
  };
  
  return (
    <>
      {/* { uidErrorPopup && 
        <div className="gray-background">
          <div className="logout-card">

          </div> 
        </div>
      } */}


      <div className="password-reset-main">
        <div className="reset-password-card">
          <img className="green-key-icon" src={greenKey}/>
          <h2 className="prp-h2">Recuperar Contraseña</h2>
          <p>Por favor elige tu nueva contraseña</p>
          <div className="prp-input-row">
            <label className="prp-label">Nueva contraseña:</label>
            <input className="prp-input" value={password}
              onChange={(event) => setPassword(event.target.value)} 
              />
          </div>
          <div className="prp-input-row">
            <label className="prp-label">Repetir contraseña:</label>
            <input className="prp-input" value={confirmPassword} 
              onChange={(event) => setConfirmPassword(event.target.value)}
              />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          
          {!successMessage &&
            <button className='formButton' onClick={handleSubmit}>Resetear Contraseña</button>
          }
          {successMessage && 
            <button className='formButton' onClick={()=> navigate('/login')}>Volver</button>
          }
        </div>
      </div>
    </>
  );
};
