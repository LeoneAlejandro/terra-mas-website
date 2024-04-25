import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import UbicationComponent from './UbicationComponent'
import FooterComponent from './FooterComponent'
import FieldViewBayer from './FieldViewBayer'
import ContactoComponent from './ContactoComponent'
import LoginComponent from './LoginComponent'
import ProfileComponent from './ProfileComponent'
import NotFoundComponent from './NotFoundComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import '../css/TerraMasSiteApp.css'
import ScrollToTop from './ScrollToTop'
import PasswordResetPage from './PasswordResetPage'

export default function TerraMasSiteApp() {

    function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        if(authContext.isAuthenticated) {
            return children
        }
        return <Navigate to ="/"/>
    } 

    return(
        <div className="TerraMasSiteApp">
            <AuthProvider>
                <BrowserRouter>
                    <ScrollToTop>
                        <HeaderComponent/>
                            <Routes>
                                <Route path="/" element={<>
                                        <HomeComponent />
                                        <FieldViewBayer />
                                        <UbicationComponent />
                                    </>} />

                                <Route path='/contacto' element={<ContactoComponent/>} />

                                <Route path='/login' element={<LoginComponent/>}/>

                                <Route path='/perfil' element={
                                    <AuthenticatedRoute>
                                        <ProfileComponent />
                                    </AuthenticatedRoute>
                                    } />

                                <Route path='/reset-password/:uid' element={
                                    <PasswordResetPage/>
                                    } />


                                <Route path='*' element={<NotFoundComponent/>} />
                            </Routes>
                        <FooterComponent />
                    </ScrollToTop>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}