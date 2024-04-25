import '../css/LoginComponent.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import AccountRecoveryRequest from './AccountRecoveryRequestComponent';

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


    const authContext = useAuth();
    const navigate = useNavigate();


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
        if(await authContext.login(loginEmail, loginPassword)) {
            navigate(`/`)
        } else {
            setShowErrorMessage("Usuario o contraseña incorrectos")
        }
    }

    async function handleRegister() {
        if(!singupFirstName || !singupLastName || !singupEmail || !singupPassword) {
            setShowSingupErrorMessage('Debes completar todos los campos')
            return
        }


        if(await authContext.register(singupFirstName, singupLastName, singupEmail, singupPassword)) {
            navigate(`/?accountCreated=true`)
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


    const togglePasswordRecoveryPopup = () => {
        setShowRecoverPasswordPopup(!showRecoverPasswordPopup)
    }
    
    return(
        <>
            {showRecoverPasswordPopup && 
                <AccountRecoveryRequest onClose={togglePasswordRecoveryPopup}/>
            }
        
            <div className="login-component">

                <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                        <div className="form-container sign-up-container">
                            <form action="#">
                                <h1 className='login-title'>Crear cuenta</h1>
                                <input value={singupFirstName} onChange={handleRegFirstNameChange} type="text" placeholder="Nombre" />
                                <input value={singupLastName} onChange={handleRegLastNameChange} type="text" placeholder="Apellido" />
                                <input value={singupEmail} onChange={handleRegUsernameChange} type="email" placeholder="Email" />
                                <input value={singupPassword} onChange={handleRegPasswordChange} type="password" placeholder="Contraseña" />
                                {showSingupErrorMessage &&
                                    <div className="error-message">
                                        {showSingupErrorMessage}
                                    </div>
                                }
                                <button onClick={handleRegister} className='formButton' type='button'>Crear cuenta</button>
                            </form>
                        </div>  

                        <div className="form-container sign-in-container">
                            <form action="#">
                                <h1 className='login-title'>Iniciar sesión</h1>
                                <input value={loginEmail} onChange={handleUsernameChange} type="email" placeholder="Email" />
                                <input value={loginPassword} onChange={handlePasswordChange} type="password" placeholder="Contraseña" />
                                {showErrorMessage && 
                                    <div className="error-message">
                                        {showErrorMessage}
                                    </div>
                                }
                                <button className='hyperlink-button' onClick={togglePasswordRecoveryPopup} type="button">olvidaste tu contraseña ?</button>
                                <button onClick={handleSubmit} className='formButton' type='button'>Ingresar</button>
                            </form>
                        </div>

                        <div className="overlay-container">
                            <div className="overlay">
                                
                                <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
                                    <h1 className='login-title-negative'>Ya tenés cuenta ?</h1>
                                    <p className='login-p'>Si ya creaste una cuenta podés ingresar con el siguiente botón</p>
                                    <button className="ghost-button" onClick={handleSignInClick}>Iniciar sesión</button>
                                </div>

                                <div className={`overlay-panel overlay-right ${!isSignUpActive ? 'active' : ''}`}>
                                    <h1 className='login-title-negative'>Bienvenido !</h1>
                                    <p className='login-p'>Si todavía no creaste una cuenta lo podés hacer mediante le siguiente botón</p>
                                    <button className="ghost-button" onClick={handleSignUpClick}>Crear cuenta</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}