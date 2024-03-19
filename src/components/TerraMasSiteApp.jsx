//import AuthProvider, {useAuth} from './security/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import UbicationComponent from './UbicationComponent'
import FooterComponent from './FooterComponent'
import FieldViewBayer from './FieldViewBayer'
import ContactoComponent from './ContactoComponent'
import '../css/TerraMasSiteApp.css'
import LoginComponent from './LoginComponent'
import SobreNosotros from './SobreNosotrosComponent'
import CarbonoFVComponent from './CarbonoFVComponent'

export default function TerraMasSiteApp() {

    //TODO:
    /*function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        if(authContext.isAuthenticated) {
            return children
        }
    } */


    return(
        <div className="TerraMasSiteApp">

        <BrowserRouter>
        
            <HeaderComponent/>

                <Routes>

                    <Route path="/" element={<>
                            <HomeComponent />
                            <FieldViewBayer />
                            {/* <CarbonoFVComponent/> */}
                            <UbicationComponent />
                        </>} />

                    <Route path='/contacto' element={<ContactoComponent/>} />

                    <Route path='/login' element={<LoginComponent/>}></Route>

                    <Route path='/sobre-nosotros' element={<>
                            <SobreNosotros/>
                            <UbicationComponent />
                    </>
                            
                        }></Route>

                </Routes>

            <FooterComponent />
        
        </BrowserRouter>

        </div>
    )
}