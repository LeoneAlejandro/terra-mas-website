import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeChangepassword, executeJwtAuthenticationService, executeRegistrationService, executeRequestPasswordChange, executeResetPassword, executeUidValidation } from "./AuthenticationApiService";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [email, setEmail] = useState(null)
    const [token, setToken] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [userRole, setUserRole] = useState(null)


    async function login(email, password) {
        try {
            const response = await executeJwtAuthenticationService(email, password)
            
            if(response.status === 200) {
                console.log("Logueado")
                const jwtToken = 'Bearer ' + response.data.token
                setAuthenticated(true)
                setEmail(email)
                setToken(jwtToken)
                setFirstName(response.data.firstName)
                setUserRole(response.data.userRole)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )
                
                return true

            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setEmail(null)
    }

    async function register(firstName, lastName, email, password) {
        try {
            const response = await executeRegistrationService(firstName, lastName, email, password)
            
            if(response.status === 200) {
                console.log("Registrado")
                
                return true

            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    async function changePassword(email, currentPassword, newPassword, confirmationPassword) {
        try {
            const response = await executeChangepassword(email, currentPassword, newPassword, confirmationPassword)

            if(response.status === 200) {
                console.log("Contraseña cambiada exitosamente")
                return true
            } else {
                // logout()
                console.log("Error al cambiar contraseña")
                return false
            }
        } catch(error) {
            // logout()
            console.log(error)
            return false
        }
    }

    async function requestPasswordChange(email) {
        try {
            const response = await executeRequestPasswordChange(email)
            if(response.status === 200) {
                return response
            } else {
                alert("Error pidiendo request de cambio de contraseña")
            }
        } catch(error) {
            // logout()
            console.log(error)
            return false
        }
    }

    async function resetPassword(email, newPassword) {
        try {
            const response = await executeResetPassword(email, newPassword)
            if(response.status === 200) {
                return response
            } else {
                console.log("Error al resetear")
                alert("Error backend reseteando password")
                return false
            }
        } catch(error) {
            // logout()
            console.log(error)
            return false
        }
    }

    async function checkUidValidation(uid) {
        try {
            const response = await executeUidValidation(uid)
            if(response.status === 200) {
                return response
            } else {
                console.log("Error al validar UID")
                return false
            }
        } catch(error) {
            console.log(error)
            return false
        }
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, changePassword, resetPassword, checkUidValidation, requestPasswordChange, firstName: firstName, username: email, token, userRole: userRole}}>
            {children}
        </AuthContext.Provider>
    )
}