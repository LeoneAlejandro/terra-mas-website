import '../css/LoginComponent.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [singupName, setSingupName] = useState('')
    const [singupEmail, setSingupEmail] = useState('')
    const [singupPassword, setSingupPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setLoginEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setLoginPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(loginEmail, loginPassword)) {
            navigate(`/`)
        } else {
            console.log("algo anda mal")
            setShowErrorMessage(true)
        }
    }

    async function handleRegister() {
        if(await authContext.register(loginEmail, loginPassword)) {
            navigate(`/`)
        } else {
            console.log("el registro fue incorrecto")
            setShowErrorMessage(true)
        }
    }

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const navigate = useNavigate();
    


    return(
        <div className="loginComponent">
            
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Crear cuenta</h1>
                            <input value={singupName} type="text" placeholder="Nombre" />
                            <input value={singupEmail} type="email" placeholder="Email" />
                            <input value={singupPassword} type="password" placeholder="Contraseña" />
                            <button onClick={handleRegister} className='formButton' type='button'>Crear cuenta</button>
                        </form>
                    </div>  

                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Iniciar sesión</h1>
                            <input value={loginEmail} onChange={handleUsernameChange} type="email" placeholder="Email" />
                            <input value={loginPassword} onChange={handlePasswordChange} type="password" placeholder="Password" />
                            {showErrorMessage && <div className="errorMessage">Usuario o contraseña incorrectos</div>}
                            <a className='loginA' href="#">olvidaste tu contraseña ?</a>
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
    )
}