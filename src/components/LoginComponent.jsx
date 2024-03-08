import '../css/LoginComponent.css'
import React, { useState } from 'react';

export default function LoginComponent() {

    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };


    return(
        <div className="loginComponent">

            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Crear cuenta</h1>
                            {/* <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                            </div> 
                            <span>or use your email for registration</span>*/}
                            <input type="text" placeholder="Nombre" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Contraseña" />
                            <button className='formButton'>Crear cuenta</button>
                        </form>
                    </div>

                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1 className='loginIniciar'>Iniciar sesión</h1>
                            {/* <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span> */}
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a className='loginA' href="#">olvidaste tu contraseña ?</a>
                            <button className='formButton'>Ingresar</button>
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
                                <h1 className='loginTitulo'>Bienvenido</h1>
                                <p className='loginParrafo'>Si todavía no creaste una cuenta lo podés hacer mediante le siguiente botón</p>
                                <button className="ghost" onClick={handleSignUpClick}>Crear cuenta</button>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}