import { apiClient } from "../api/ApiClient"

export const executeJwtAuthenticationService 
    = (email, password) => apiClient.post(`/authenticate`, { email, password })

export const executeRegistrationService 
    = (firstName, lastName, email, password) => apiClient.post(`/registration`, { firstName, lastName, email, password })