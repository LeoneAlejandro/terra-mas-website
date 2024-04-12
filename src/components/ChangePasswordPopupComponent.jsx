import { useRef, useState } from 'react';
import { useAuth } from './security/AuthContext';
import closeButton from '../assets/close_icon.jpg'
import greenKey from '../assets/green-key.png'
import '../css/MiPerfilComponent.css'
import '../css/ChangePasswordPopupComponent.css'

export default function ChangePasswordPopup({ onClose }) {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const authContext = useAuth();
    const email = authContext.username
    
    const modalRef = useRef();

    function closeModal(e) {
      if(modalRef.current === e.target) {
        onClose()
      }
    }

    function handleRegCurrentPasswordChange(event) {
        setCurrentPassword(event.target.value)
    }

    function handleRegNewPasswordChange(event) {
        setNewPassword(event.target.value)
    }

    function handleRegConfirmationPasswordChange(event) {
        setConfirmationPassword(event.target.value)
    }
    
    async function handleChangePassword() {
        setErrorMessage('')
        setSuccessMessage('')

        if(newPassword === '' || confirmationPassword === '' || currentPassword === '') {
            setErrorMessage("Debes completar todos los campos")
            return
        }

        if(newPassword !== confirmationPassword) {
            setErrorMessage("Las nuevas contraseñas no coinciden")
            return
        }

        if(newPassword === currentPassword) {
            setErrorMessage("La nueva contraseña es igual a la existente")
            return
        }

        if(await authContext.changePassword(email, currentPassword, newPassword, confirmationPassword)) {
            // navigate(`/`)
            setErrorMessage('')
            setCurrentPassword('')
            setNewPassword('')
            setConfirmationPassword('')
            setSuccessMessage("Contraseña cambiada correctamente")
        } else {
            console.log("No se pudo cambiar contraseña")
            setErrorMessage("La contraseña actual es incorrecta")
        }
    }

    return(
        <>
            <div className="grayBackgroundChangePassword" ref={modalRef} onClick={closeModal}>
                <img className='changePasswordIcon' src={greenKey} alt="" />
                <div className="changePasswordCard">
                    <img className='xButton' src={closeButton} alt="X" onClick={onClose}/>
                    <h6>Cambio de contraseña</h6>
                    <input value={currentPassword} onChange={handleRegCurrentPasswordChange} type="text" placeholder="Contraseña actual" />
                    <input value={newPassword} onChange={handleRegNewPasswordChange} type="text" placeholder="Nueva contraseña" />
                    <input value={confirmationPassword} onChange={handleRegConfirmationPasswordChange} type="text" placeholder="Repetir contraseña" />
                    { errorMessage && 
                        <div className="errorMessage">
                        { errorMessage }  
                        </div>
                    }
                    { successMessage && 
                        <div className="successMessage">
                        { successMessage }  
                        </div>
                    }
                    <button onClick={handleChangePassword} className='formButton' type='button'>Cambiar contraseña</button>
                </div>
            </div>
        </>
    )
}