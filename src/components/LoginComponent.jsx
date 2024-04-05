import '../css/LoginComponent.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import closeButton from '../assets/close_icon.jpg';
import recoverPasswordJpeg from '../assets/reset-password.jpg'

export default function LoginComponent() {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [singupFirstName, setSingupFirstName] = useState('')
    const [singupLastName, setSingupLastName] = useState('')
    const [singupEmail, setSingupEmail] = useState('')
    const [singupPassword, setSingupPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState('')
    const [showSingupErrorMessage, setShowSingupErrorMessage] = useState('')
    const [isSignUpActive, setIsSignUpActive] = useState(false)
    const [showRecoverPasswordPopup, setShowRecoverPasswordPopup] = useState('')
    const [resetPasswordEmail, setResetPasswordEmail] = useState('')


    const authContext = useAuth();

    function handleResetPasswordEmailChange(event) {
        setResetPasswordEmail(event.target.value)
    }

    function handleUsernameChange(event) {
        setLoginEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setLoginPassword(event.target.value)
    }

    function handleRegFirstNameChange(event) {
        setSingupFirstName(event.target.value)
    }

    function handleRegLastNameChange(event) {
        setSingupLastName(event.target.value)
    }

    function handleRegUsernameChange(event) {
        setSingupEmail(event.target.value)
    }

    function handleRegPasswordChange(event) {
        setSingupPassword(event.target.value)
    }
    

    async function handleSubmit(){
        console.log(authContext)
        if(await authContext.login(loginEmail, loginPassword)) {
            navigate(`/`)
        } else {
            console.log("algo anda mal")
            setShowErrorMessage("Usuario o contraseña incorrectos")
        }
    }

    async function handleRegister() {
        if(!singupFirstName || !singupLastName || !singupEmail || !singupPassword) {
            setShowSingupErrorMessage('Debes completar todos los campos')
            return
        }


        if(await authContext.register(singupFirstName, singupLastName, singupEmail, singupPassword)) {
            navigate(`/`)
        } else {
            console.log("el registro fue incorrecto")
            setShowSingupErrorMessage("El correo ya está en uso")
        }
    }

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
        setShowErrorMessage('')
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
        setShowSingupErrorMessage('')
    };


    const navigate = useNavigate();


    async function handleRecoverPassword() {
        try {
            const changePasswordResponse = await authContext.resetPassword(resetPasswordEmail);
            if(changePasswordResponse.status === 200) {
                alert('El correo fue enviado exitosamente!')
                setShowRecoverPasswordPopup(false)
                setResetPasswordEmail('')
            } else {
                console.log("No se pudo resetear la contraseña")
                alert('Error en backend')
            }
        } catch (error) {
            console.error('Error initiating password recovery:', error);
            alert('Failed to initiate password recovery.');
        }
    };
    
    return(
        <>
            {showRecoverPasswordPopup && 
                <div className="logoutScreen">
                    <div className='logoutCard'>
                        <img className='xButton' src={closeButton} alt="X" onClick={() => setShowRecoverPasswordPopup(false) }/>
                        <img className='resetPasswordImg' src={recoverPasswordJpeg} alt="Imagen de recuperación de contraseña"/>
                        <p className='logoutP'>Ingresa tu correco electrónico para recuperar la contraseña.</p>
                        <input value={resetPasswordEmail} onChange={handleResetPasswordEmailChange} type="text" placeholder='Email' />
                        <button className='formButton' onClick={() => (handleRecoverPassword())}>
                        {/* <span className='transition'></span> */}
                        Reestablecer contraseña
                        </button>
                    </div>
                </div>
            }
        
        <div className="loginComponent">
            
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Crear cuenta</h1>
                            <input value={singupFirstName} onChange={handleRegFirstNameChange} type="text" placeholder="Nombre" />
                            <input value={singupLastName} onChange={handleRegLastNameChange} type="text" placeholder="Apellido" />
                            <input value={singupEmail} onChange={handleRegUsernameChange} type="email" placeholder="Email" />
                            <input value={singupPassword} onChange={handleRegPasswordChange} type="password" placeholder="Contraseña" />
                            {showSingupErrorMessage &&
                                <div className="errorMessage">
                                    {showSingupErrorMessage}
                                </div>
                            }
                            <button onClick={handleRegister} className='formButton' type='button'>Crear cuenta</button>
                        </form>
                    </div>  

                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Iniciar sesión</h1>
                            <input value={loginEmail} onChange={handleUsernameChange} type="email" placeholder="Email" />
                            <input value={loginPassword} onChange={handlePasswordChange} type="password" placeholder="Password" />
                            {showErrorMessage && 
                                <div className="errorMessage">
                                    {showErrorMessage}
                                </div>
                            }
                            <a className='loginA' onClick={() => setShowRecoverPasswordPopup(true)} href="#">olvidaste tu contraseña ?</a>
                            <button onClick={handleSubmit} className='formButton' type='button'>Ingresar</button>
                        </form>
                    </div>

                    <div className="overlay-container">
                        <div className="overlay">
                            
                            <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
                                <h1 className='loginTitulo'>Ya tenés cuenta ?</h1>
                                <p className='loginParrafo'>Si ya creaste una cuenta podés ingresar con el siguiente botón</p>
                                <button className="ghost" onClick={handleSignInClick}>Iniciar sesión</button>
                            </div>

                            <div className={`overlay-panel overlay-right ${!isSignUpActive ? 'active' : ''}`}>
                                <h1 className='loginTitulo'>Bienvenido !</h1>
                                <p className='loginParrafo'>Si todavía no creaste una cuenta lo podés hacer mediante le siguiente botón</p>
                                <button className="ghost" onClick={handleSignUpClick}>Crear cuenta</button>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
        </>
    )
}