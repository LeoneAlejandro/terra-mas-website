import '../css/MiPerfilComponent.css'
import pp from '../assets/ppgeneric.jpg'
import { useAuth } from './security/AuthContext';
import { executeGetUserInfo } from './security/AuthenticationApiService'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import closeButton from '../assets/close_icon.jpg'

export default function MiPerfilComponent() {

    const authContext = useAuth();
    const email = authContext.username
    
    const [userInfo, setUserInfo] = useState(null);
    const [contraseñaPopup, setContraseñaPopup] = useState(null);
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmationPassword, setConfirmationPassword] = useState('')
    const [mensajeError, setMensajeError] = useState('')
    const [mensajeExito, setMensajeExito] = useState('')

    useEffect(() => {
        fetchUserInfo()
    },[])


    async function fetchUserInfo() {
        try {
            const userInfoResponse = await executeGetUserInfo(email);
            setUserInfo(userInfoResponse.data);
        } catch (error) {
            console.error('Error buscando usuario:', error);
        }
    }

    const onCambiarcotnraseña = () => {
        setContraseñaPopup(true)
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

    const modalRef = useRef();

    function closeModal(e) {
      if(modalRef.current === e.target) {
        setContraseñaPopup(false)
      }
    }

    async function handleChangePassword() {
        setMensajeError('')
        setMensajeExito('')

        if(newPassword === '' || confirmationPassword === '' || currentPassword === '') {
            setMensajeError("Debes completar todos los campos")
            return
        }

        if(newPassword !== confirmationPassword) {
            setMensajeError("Las nuevas contraseñas no coinciden")
            return
        }

        if(newPassword === currentPassword) {
            setMensajeError("La nueva contraseña es igual a la existente")
            return
        }

        if(await authContext.changePassword(email, currentPassword, newPassword, confirmationPassword)) {
            // navigate(`/`)
            console.log("Contraseña guardada")
            setMensajeError('')
            setMensajeExito("Contraseña cambiada correctamente")
            resetValuesPassword()
        } else {
            console.log("No se pudo cambiar contraseña")
            setMensajeError("La contraseña actual es incorrecta")
        }
    }

    const resetValuesPassword = () => {
        setCurrentPassword('')
        setNewPassword('')
        setConfirmationPassword('')
    }

    

    return(
        <>
            { contraseñaPopup && 
                <div className="logoutScreen" ref={modalRef} onClick={closeModal}>
                    <div className="logoutCard">
                        <img className='xButton' src={closeButton} alt="X" onClick={() => setContraseñaPopup(false) }/>
                        <h6>Cambio de contraseña</h6>
                        <input value={currentPassword} onChange={handleRegCurrentPasswordChange} type="text" placeholder="Contraseña actual" />
                        <input value={newPassword} onChange={handleRegNewPasswordChange} type="text" placeholder="Nueva contraseña" />
                        <input value={confirmationPassword} onChange={handleRegConfirmationPasswordChange} type="text" placeholder="Repetir contraseña" />
                        { mensajeError && 
                        <div className="errorMessage">
                          { mensajeError }  
                        </div>
                        }
                        { mensajeExito && 
                        <div className="successMessage">
                          { mensajeExito }  
                        </div>
                        }
                        <button onClick={handleChangePassword} className='formButton' type='button'>Cambiar contraseña</button>
                    </div>
                </div>
            }
        
            <div className="miPerfilComponent">



                <div className="topBar">
                    <div className="tbLabel">
                        <p>HOME / USUARIO / PERFIL</p>
                    </div>
                    <div className="tbLinks">
                        <Link className='profileLink' to="/">
                            <p className='prfileP'>VOLVER A LA PAGINA PRINCIPAL</p>
                            <svg className='arrowSvgPp' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="bottomCard">

                    <div className="perfilCard">
                            <img src={pp} alt="" className="perfilPhoto" />

                            <div className="perfilInfo">
                                { userInfo ? 
                                    (<h1 style={{color:"rgb(122, 121, 121)"}}>{ userInfo.firstName} {userInfo.lastName}</h1>)
                                    :
                                    (<h1 style={{color:"rgb(122, 121, 121)"}}>Perfil</h1>)
                                }
                            </div>
                    </div>

                    <div className="perfilDerecha">

                        <div className="perfilDerechaBody">
                            { userInfo ? (
                                <>
                                    <div className="row">
                                        <div className="cibLabel">Nombre</div>
                                        <div className="cibInfo">{userInfo.firstName}</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="cibLabel">Apellido</div>
                                        <div className="cibInfo">{userInfo.lastName}</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="cibLabel">Email</div>
                                        <div className="cibInfo">{userInfo.username}</div>
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <div className="cibLabel">Rol</div>
                                        <div className="cibInfo">{userInfo.appUserRole === "USER" ? "Usuario": "Administrador"}</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="cibLabel">Contraseña</div>
                                        <div className="cibInfo">*********</div>
                                    </div>
                                    <div className="rowChangePassword">
                                        <button className='perfilButton' onClick={onCambiarcotnraseña}>Cambiar contraseña</button>
                                    </div>
                                </>
                            ) : (

                                <div className="loading">LOADING</div>

                            )}
                            </div>
                        <div className="perfilDerechaSocalo">
                                <Link className="socaloDekalb" to="https://www.agro.bayer.com.ar/dekalb"></Link>
                                <Link className="socaloBayer" to="https://www.agro.bayer.com.ar/"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}