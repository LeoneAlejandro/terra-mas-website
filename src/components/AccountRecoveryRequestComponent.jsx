import { useState, useRef } from 'react';
import { useAuth } from './security/AuthContext';
import closeButton from '../assets/close_icon.jpg';
import recoverPasswordJpeg from '../assets/reset-password.png'
import '../css/AccountRecoveryRequestComponent.css'
import Spinner from './auxiliar/Spinner.js'

export default function AccountRecoveryRequest({onClose}) {

    const [resetPasswordEmail, setResetPasswordEmail] = useState('')

    const authContext = useAuth();
    const modalRef = useRef();
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [buttonState, setButtonState] = useState('active')
    
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
        setButtonState('loading')

        if(!resetPasswordEmail) {
            setErrorMessage('Ingresa un correo electrónico válido por favor.')
            setButtonState('active')
            return
        } 

        try {
            const changePasswordResponse = await authContext.requestPasswordChange(resetPasswordEmail);
            if(changePasswordResponse.status === 200) {
                setSuccessMessage('El correo fue enviado exitosamente !')
                setResetPasswordEmail('')
                setButtonState('success')
            } else {
                setErrorMessage('El email ingresado no está registrado.')
                setButtonState('active')
            }
        } catch (error) {
            console.error('Error initiating password recovery:', error);
            setErrorMessage('El email ingresado no está registrado.')
            setButtonState('active')
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
                    { errorMessage && 
                        <div className="error-message">{errorMessage}</div>
                    }
                    { successMessage && 
                        <div className="success-message">{successMessage}</div>
                    }


                    { (buttonState === 'active') &&                     
                        <button className='formButton' onClick={handleRecoverPassword}>
                            Reestablecer contraseña
                        </button>
                    }
                    { (buttonState === 'loading') &&
                        <div className="formButton">
                            <Spinner />
                        </div>
                    }
                    { (buttonState === 'success') &&
                        <button className='formButton' onClick={onClose}>
                            Volver
                        </button>
                    }
                </div>
            </div>
        </>
    )
}