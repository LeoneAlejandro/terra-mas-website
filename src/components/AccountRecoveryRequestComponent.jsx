import { useState, useRef } from 'react';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom';
import closeButton from '../assets/close_icon.jpg';
import recoverPasswordJpeg from '../assets/reset-password.png'
import '../css/AccountRecoveryRequestComponent.css'

export default function AccountRecoveryRequest({onClose}) {

    const [resetPasswordEmail, setResetPasswordEmail] = useState('')

    const navigate = useNavigate();
    const authContext = useAuth();
    const modalRef = useRef();
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    
    function closeModal(e) {
        if(modalRef.current === e.target) {
          onClose()
        }
      }

    function handleResetPasswordEmailChange(event) {
        setResetPasswordEmail(event.target.value)
    }

    async function handleRecoverPassword() {
        setErrorMessage('')
        setSuccessMessage('')
        try {
            const changePasswordResponse = await authContext.requestPasswordChange(resetPasswordEmail);
            if(changePasswordResponse.status === 200) {
                // alert('El correo fue enviado exitosamente!')
                setSuccessMessage('El correo fue enviado exitosamente !')
                setResetPasswordEmail('')
                // onClose()
            } else {
                // alert('No pudimos enviar el correo, por favor revisa el correo electrónico ingresado')
                setErrorMessage('No tenemos cuentas con el correo electrónico ingresado')
            }
        } catch (error) {
            console.error('Error initiating password recovery:', error);
            alert('Failed to initiate password recovery.');
        }
    };

    return(
        <>
            <div className="gray-background" ref={modalRef} onClick={closeModal}>
                <div className='request-password-reset-card'>
                    <img className='x-close-button' src={closeButton} alt="X" onClick={onClose}/>
                    <img className='reset-password-img' src={recoverPasswordJpeg} alt="Imagen de recuperación de contraseña"/>
                    <p className='logout-text_pr'>Para recuperar tu contraseña ingresá tu correo electrónico y envía la solicitud. Una vez realizado recibirás un correo electrónico para resetearla.</p>
                    <input value={resetPasswordEmail} onChange={handleResetPasswordEmailChange} type="text" placeholder='Email' />
                    {errorMessage && 
                        <div className="error-message">{errorMessage}</div>
                    }
                    {successMessage && 
                        <div className="success-message">{successMessage}</div>
                    }
                    {!successMessage &&
                        <button className='formButton' onClick={handleRecoverPassword}>
                            Reestablecer contraseña
                        </button>
                    }
                    { successMessage &&
                        <button className='formButton' onClick={onClose}>
                            Volver
                        </button>
                    }
                </div>
            </div>
        </>
    )
}