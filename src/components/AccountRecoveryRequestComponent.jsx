import { useState, useRef } from 'react';
import { useAuth } from './security/AuthContext';
import closeButton from '../assets/close_icon.jpg';
import recoverPasswordJpeg from '../assets/reset-password.png'

export default function AccountRecoveryRequest({onClose}) {

    const [resetPasswordEmail, setResetPasswordEmail] = useState('')

    const authContext = useAuth();
    const modalRef = useRef();

    function closeModal(e) {
        if(modalRef.current === e.target) {
          onClose()
        }
      }

    function handleResetPasswordEmailChange(event) {
        setResetPasswordEmail(event.target.value)
    }

    async function handleRecoverPassword() {
        try {
            const changePasswordResponse = await authContext.requestPasswordChange(resetPasswordEmail);
            if(changePasswordResponse.status === 200) {
                alert('El correo fue enviado exitosamente!')
                setResetPasswordEmail('')
                onClose()
            } else {
                alert('No pudimos enviar el correo, por favor revisa el correo electrónico ingresado')
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
                        <button className='formButton' onClick={() => (handleRecoverPassword())}>
                        {/* <span className='transition'></span> */}
                        Reestablecer contraseña
                        </button>
                    </div>
                </div>
        </>
    )
}