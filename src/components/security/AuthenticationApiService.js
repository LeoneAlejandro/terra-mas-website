import { apiClient } from "../api/ApiClient"

export const executeJwtAuthenticationService 
    = (email, password) => apiClient.post(`/authenticate`, { email, password })

export const executeRegistrationService 
    = (firstName, lastName, email, password) => apiClient.post(`/registration`, { firstName, lastName, email, password })

export const executeGetUserInfo
    = (email) => apiClient.get(`/userinfo/${email}`)

export const executeChangepassword
    = (email, currentPassword, newPassword, confirmationPassword) => apiClient.post(`changepassword/${email}`, { currentPassword, newPassword, confirmationPassword })

export const executeResetPassword
    = (email) => apiClient.post(`resetpassword/${email}`)