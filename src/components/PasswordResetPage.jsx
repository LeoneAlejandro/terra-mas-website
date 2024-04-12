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
  const [error, setError] = useState('');

  const authContext = useAuth();
  const navigate = useNavigate();
  const { uid: urlUID } = useParams();

  useEffect(() => {
    const checkUIDValidity = async () => {
      try {
        const response = await authContext.checkUidValidation(urlUID);
        if (response.status === 200) {
          setEmail(response.data)
          console.log("uid existe")
         } else {
        //DESCOMENTAR ESTO PARA QUE FUNCIONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          // alert("El link que quisiste acceder ya no existe.")
          // navigate(`/`)
        }
      } catch (error) {
        console.error('Error verifying UID:', error);
      }
    };
      checkUIDValidity()
  }, [urlUID]);


  const handleSubmit = async (event) => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const changePasswordResponse = await authContext.resetPassword(email, password)
      if(changePasswordResponse.status === 200) {
        alert("Contraseña cambiada exitosamente")
        navigate(`/login`)
      } else {
        alert("No se pudo cambiar la password")
      }
    } catch(error) {
      console.log(error)
    }
  };
  
  return (
    <>
      <div className="passwordResetPage">
        <div className="resetPasswordCard">
          <img className="greenKeyIcon" src={greenKey}/>
          <h2 className="rph2">Recuperar Contraseña</h2>
          <p>Por favor elige tu nueva contraseña</p>
          <div className="rpInputRow">
            <label className="resetLabel">Nueva contraseña:</label>
            <input className="resetInput" value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              />
          </div>
          <div className="rpInputRow">
            <label className="resetLabel">Repetir contraseña:</label>
            <input className="resetInput" value={confirmPassword} 
              onChange={(event) => setConfirmPassword(event.target.value)}
              />
          </div>
          {error && <div className="errorMessage">{error}</div>}
          <button className='formButton' onClick={handleSubmit}>Resetear Contraseña</button>
        </div>
      </div>
    </>
  );
};
