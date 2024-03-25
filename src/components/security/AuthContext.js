import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService, executeRegistrationService } from "./AuthenticationApiService";

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
                // const jwtToken = 'Bearer ' + response.data.token
                // setAuthenticated(true)
                // setEmail(email)
                // setToken(jwtToken)

                // apiClient.interceptors.request.use(
                //     (config) => {
                //         config.headers.Authorization=jwtToken
                //         return config
                //     }
                // )
                
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

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, firstName: firstName, username: email, token, userRole: userRole}}>
            {children}
        </AuthContext.Provider>
    )
}