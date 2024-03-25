import '../css/MiPerfilComponent.css'
import pp from '../assets/ppgeneric.png'
import { useAuth } from './security/AuthContext';
import { executeGetUserInfo } from './security/AuthenticationApiService'
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import arrowSvg from '../assets/right-arrow-svgrepo-com.svg'

export default function MiPerfilComponent() {

    const authContext = useAuth();
    const email = authContext.username

    const [userInfo, setUserInfo] = useState(null);

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
    

    return(
        <div className="miPerfilComponent">
            <div className="topBar">
                <div className="tbLabel">
                    <p>HOME / USUARIO / PERFIL</p>
                </div>
                <div className="tbLinks">
                    <Link className='profileLink' to="/">
                        <p className='prfileP'>VOLVER A LA HOME</p>
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
                            <h1 style={{color:"rgb(122, 121, 121)"}}>{userInfo.firstName}</h1>
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
                                    <button className='perfilButton'>Cambiar contraseña</button>
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

    )
}