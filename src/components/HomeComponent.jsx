import '../css/HomeComponent.css'

export default function HomeComponent() {

    return(
        <div>
            <div className="dekalb-video">
                <video  loop autoPlay muted>
                    <source src={require('../assets/videos/dekalbRinde.mp4')} type="video/mp4" /> 
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>

            <div className='aboutus'>
                <div className="aboutus-left">
                    <div className="container-text">

                        <h3>SOBRE NOSOTROS</h3>
                        <p>
                            En Terra Mas nos dedicamos hace más de 20 años a brindar productos y servicios 
                            agropecuarios, siendo proveedores exclusivos de Bayer y Monsanto, para facilitar 
                            soluciones para tus cultivos. 
                        </p><p>
                            Tanto en Pergamino como nuestra sucursal en Salto y nuestos vendedores en Rojas buscamos 
                            la confianza y respaldo de nuestros clientes para brindar soluciones agricolas con la tecnología más avanzada.
                        </p><p>
                            Asesorate con nuestros ingenieros sobre los mejores híbridos Dekalb para tu 
                            siembra, y nuestra gran variedad de productos de protección de cultivos.
                        </p>
                        <a className='learn-more-link' href="/contacto">CONTACTANOS
                            <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="aboutus-img"></div>
            </div>  

            <div className="dekalb-card">
                <div className="dekalb-card-left"></div>
                <div className="dekalb-card-rigth">
                    <div className="container-text">
                        <h3>DEKALB: VANGUARDIA EN MAÍZ</h3>
                        <h5>TECNOLOGÍAS VTPRO4 y TRECEPTA</h5>
                        <p>
                            El sistema <b>VTPRO4</b> es un concepto integral que 
                            combina la mejor genética con las más avanzadas tecnologías de protección de cultivo y 
                            tratamiento de semillas para potenciar el rendimiento del maíz.
                        </p><p>
                            <b>TRECEPTA</b> es la última innovación en genética y tecnología que combina los mejores 
                            híbridos de Dekalb con la más avanzada protección contra las principales plagas 
                            que afectan el cultivo de maíz. Trecepta presenta un efectivo control contra 
                            Spodoptera frugiperda (Cogollero) y Diatraea saccharalis (Barrenador del tallo). 
                        </p>
                        <a className='learn-more-link' href="https://www.agro.bayer.com.ar/dekalb/catalogo">CONSULTÁ TODAS NUESTRAS VARIEDADES
                            <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}