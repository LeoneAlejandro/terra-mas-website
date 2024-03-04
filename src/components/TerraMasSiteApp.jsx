//import AuthProvider, {useAuth} from './security/AuthContext'
import HeaderComponent from './HeaderComponent'
import '../css/TerraMasSiteApp.css'


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

            <HeaderComponent/>

            <div className='contenido'></div>

            <div className='sobreNosotros'>
                <div className="sobreNosotrosTexto">
                    <h1 className='sobreNosotrosTitle'>SOBRE NOSOTROS</h1>
                    <p className='sobreNosotrosParagraph'>En Terra Mas nos dedicamos hace más de 20 años a 
                    brindar productos y servicios agropecuarios, siendo proveedores exclusivos de Bayer y 
                    Monsanto, para facilitar soluciones para tus cultivos.
                    <br />
                    <br />
                    Asesorate con nuestros ingenieros sobre los mejores híbridos Dekalb para tu siembra,
                     y nuestra gran variedad de productos de protección de cultivos.
                    <br />
                    <br />
                    <br />
                    CONOCE MAS
                    </p>
                </div>
                <div className="sobreNosotrosImagen"></div>
            </div>  

            <div className="nuevasTecnologias">
                <div className="nuevasTecnologiasImagen"></div>
                <div className="nuevasTecnologiasTexto">
                    <h1 className='nuevasTecnologiasTitle'>CON NUEVA TECNOLOGÍA VTPRO4</h1>
                    <p className='nuevasTecnologiasParagraph'>El sistema VTPRO4 es un concepto integral que 
                    combina la mejor genética con las más avanzadas tecnologías de protección de cultivo y 
                    tratamiento de semillas para potenciar el rendimiento del maíz.
                    <br />
                    <br />
                    CONOCE MAS
                    </p>
                </div>
            </div>


        </div>
    )
}