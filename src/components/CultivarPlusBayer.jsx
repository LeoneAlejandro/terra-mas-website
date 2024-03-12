import '../css/CultivarPlusBayer.css'

export default function CultivarPlusBayer() {

    return(
        <div className="cultivarPlusBayer">
            <div className="cultivarPlus">
                <div className="cultivarPlusIzquierda">
                    <div className="containerText">
                        <h3>PROGRAMA CULTIVAR</h3>
                        <h5>SEGURIDAD Y PROTECCION PARA TUS CULTIVOS</h5>
                        <p>
                            Al ser cliente DEKALB podés formar parte de <b>CULTIVAR</b>, el programa más <b>COMPLETO</b> y <b>EXCLUSIVO</b> del mercado. 
                            El objetivo del programa es brindarle seguridad al productor, 
                            ofreciéndole una garantía de resiembra de semillas de maíz DEKALB 
                            ante eventos como granizo, encharcamiento o helada en el caso de la región templada. 
                        </p>
                        <p>
                            Conocé más sobre nuestros planes <b>Cultivar</b> y <b>Cultivar Plus</b>, y como participar en ellos.
                        </p>
                        <a className='conoceMasLink' href="https://www.dekalb.com.ar/es-ar/programa-cultivar.html">CONSULTÁ NUESTROS PROGRAMAS
                            <svg className='arrowSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <polyline points="14 6 20 12 14 18"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="cultivarPlusImagen">
                </div>
            </div>

            <div className="bayerInsumos">
                <div className="bayerInsumosImagen"></div>

                <div className="bayerInsumosDerecha">
                    <div className="containerText">
                        <h3>BAYER INSUMOS</h3>
                        <p>
                            Bayer se destaca como líder mundial en soluciones agrícolas, 
                            ofreciendo productos innovadores para la protección y mejora de los rendimientos 
                            de los cultivos. Desde herbicidas y fungicidas hasta los insecticidas más avanzados, la 
                            cartera de Bayer aborda desafíos específicos, asegurando cosechas saludables. 
                        </p><p>
                            Comprometidos con la sustentabilidad, Bayer fomenta prácticas agrícolas respetuosas 
                            con el medio ambiente mediante , contribuyendo a la seguridad alimentaria global y al bienestar 
                            de las comunidades agrícolas.
                        </p>
                        <a className='conoceMasLink' href="https://www.cropscience.bayer.com.ar/soluciones-maiz">TODO SOBRE BAYER
                            <svg className='arrowSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
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