import '../css/HomeComponent.css'

export default function HomeComponent() {

    return(
        <div className="homeComponent">

            {/* <div className='contenido'></div> */}
            <div className="video">
                <video  loop autoPlay muted>
                    <source src={require('../assets/videos/dekalbRinde.mp4')} type="video/mp4" /> 
                    {/* <source src={require('../assets/videos/dekalbVideo1080.mp4')} type="video/mp4" />  */}
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>

            <div className='sobreNosotros'>
                <div className="sobreNosotrosTexto">
                    {/* <h1 className='sobreNosotrosTitle'>SOBRE NOSOTROS</h1> */}
                    <h3>SOBRE NOSOTROS</h3>
                    {/* <p className='sobreNosotrosParagraph'> */}
                    <p>
                    En Terra Mas nos dedicamos hace más de 20 años a 
                    brindar productos y servicios agropecuarios, siendo proveedores exclusivos de Bayer y 
                    Monsanto, para facilitar soluciones para tus cultivos.
                    <br />
                    <br />
                    Asesorate con nuestros ingenieros sobre los mejores híbridos Dekalb para tu siembra,
                        y nuestra gran variedad de productos de protección de cultivos.
                    </p>
                    <a className='conoceMasLink' href="">CONOCE MAS</a>

                </div>
                <div className="sobreNosotrosImagen"></div>
            </div>  

            <div className="nuevasTecnologias">
                <div className="nuevasTecnologiasImagen"></div>
                <div className="nuevasTecnologiasTexto">
                    {/* <h1 className='nuevasTecnologiasTitle'>TECNOLOGÍAS VTPRO4 y TRECEPTA</h1> */}
                    <h3>TECNOLOGÍAS VTPRO4 y TRECEPTA</h3>
                    {/* <p className='nuevasTecnologiasParagraph'> */}
                    <p>
                    El sistema <span style={{fontWeight: 'bold'}}> VTPRO4</span> es un concepto integral que 
                    combina la mejor genética con las más avanzadas tecnologías de protección de cultivo y 
                    tratamiento de semillas para potenciar el rendimiento del maíz.
                    <br />
                    <br />
                    <span style={{fontWeight: 'bold'}}> Trecepta</span> es la última innovación en genética y tecnología que combina los mejores 
                    híbridos de Dekalb con la más avanzada protección contra las principales plagas 
                    que afectan el cultivo de maíz. Trecepta presenta un efectivo control contra 
                    Spodoptera frugiperda (Cogollero) y Diatraea saccharalis (Barrenador del tallo). 
                    </p>
                    <a className='conoceMasLink' href="https://www.dekalb.com.ar/es-ar/productos-maiz.html">CONOCE MAS</a>
                </div>
            </div>

        </div>

    )
}