import { apiClient } from "../api/ApiClient"

export const executeJwtAuthenticationService 
    = (email, password) => apiClient.post(`/authenticate`, { email, password })