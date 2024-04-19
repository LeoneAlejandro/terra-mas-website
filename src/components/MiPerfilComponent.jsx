import '../css/MiPerfilComponent.css'
// import pp from '../assets/ppgeneric.jpg'
import pp from '../assets/newAccount.png'
import { useAuth } from './security/AuthContext';
import { executeGetUserInfo } from './security/AuthenticationApiService'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordPopup from './ChangePasswordPopupComponent';

export default function MiPerfilComponent() {

    const authContext = useAuth();
    const email = authContext.username
    
    const [userInfo, setUserInfo] = useState(null);
    const [changePasswordPopup, setChangePasswordPopup] = useState(false);

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                //TODO: Llamar authContext, no API v
                const userInfoResponse = await executeGetUserInfo(email);
                setUserInfo(userInfoResponse.data);
            } catch (error) {
                console.error('Error buscando usuario:', error);
                authContext.logout()
                alert("Tu sesion expiró, por favor vuelve a iniciar sesión")
                window.location.href = "/login"
            }
        };

        fetchUserInfo()
    },[])

    const onCambiarCotnraseña = () => {
        setChangePasswordPopup(!changePasswordPopup)
    }

    return(
        <>
            { changePasswordPopup &&
                <ChangePasswordPopup onClose={onCambiarCotnraseña}/>
            }
        
            <div className="my-profile-component">
                <div className="mp-top-bar">
                    <div className="mp-top-bar_label">
                        <p>HOME / USUARIO / PERFIL</p>
                    </div>
                    <div className="mp-top-bar-links">
                        <Link className='mp-profile-link' to="/">
                            <p className='mp-field-p'>VOLVER A LA PAGINA PRINCIPAL</p>
                            <svg className='mp-arrow-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="mp-bottom-card">
                    <div className="mp-profile-card">
                            <img src={pp} alt="" className="mp-profile-photo" />
                            <div className="mp-profile-info">
                                { userInfo ? 
                                    (<h1 style={{color:"rgb(122, 121, 121)"}}>{ userInfo.firstName} {userInfo.lastName}</h1>)
                                    :
                                    (<h1 style={{color:"rgb(122, 121, 121)"}}>Perfil</h1>)
                                }
                            </div>
                    </div>

                    <div className="mp-rigth">
                        <div className="mp-rigth_body">
                            { userInfo ? (
                                <>
                                    <div className="pf-row">
                                        <div className="pf-row-label">Nombre</div>
                                        <div className="pf-row-info">{userInfo.firstName}</div>
                                    </div>
                                    <hr />
                                    <div className="pf-row">
                                        <div className="pf-row-label">Apellido</div>
                                        <div className="pf-row-info">{userInfo.lastName}</div>
                                    </div>
                                    <hr />
                                    <div className="pf-row">
                                        <div className="pf-row-label">Email</div>
                                        <div className="pf-row-info">{userInfo.username}</div>
                                    </div>

                                    <hr />
                                    <div className="pf-row">
                                        <div className="pf-row-label">Rol</div>
                                        <div className="pf-row-info">{userInfo.appUserRole === "USER" ? "Usuario": "Administrador"}</div>
                                    </div>
                                    <hr />
                                    <div className="pf-row">
                                        <div className="pf-row-label">Contraseña</div>
                                        <div className="pf-row-info">*********</div>
                                    </div>
                                    <div className="pf-row-changepassword">
                                        <button className='pf-button' onClick={onCambiarCotnraseña}>Cambiar contraseña</button>
                                    </div>
                                </>
                            ) : (
                                <div className="loading">LOADING</div>
                            )}
                            </div>
                        <div className="mp-rigth_bottombar">
                                <Link className="mp-rigth_bottombar-dekalb" to="https://www.agro.bayer.com.ar/dekalb"></Link>
                                <Link className="mp-rigth_bottombar-bayer" to="https://www.agro.bayer.com.ar/"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}