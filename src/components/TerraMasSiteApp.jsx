//import AuthProvider, {useAuth} from './security/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import UbicationComponent from './UbicationComponent'
import FooterComponent from './FooterComponent'
import CultivarPlusBayer from './CultivarPlusBayer'
import ContactoComponent from './ContactoComponent'
import '../css/TerraMasSiteApp.css'
import LoginComponent from './LoginComponent'
import SobreNosotros from './SobreNosotrosComponent'
// import MessageusComponent from './'

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
                            <CultivarPlusBayer />
                            <UbicationComponent />
                        </>} />

                    <Route path='/contacto' element={<ContactoComponent/>} />

                    <Route path='/login' element={<LoginComponent/>}></Route>

                    <Route path='/sobre-nosotros' element={<>
                            {/* <MessageusComponent/> */}
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