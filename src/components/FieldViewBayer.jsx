import '../css/FieldViewBayer.css'

export default function CultivarPlusBayer() {

    return(
        <div className="cultivarPlusBayer">
            <div className="cultivarPlus">
                <div className="cultivarPlusIzquierda">
                    <div className="containerText">
                        <h3>FIELDVIEW</h3>
                        <h5>Plataforma líder en agricultura digital</h5>
                        <p>
                        Cada campo es distinto, cada lote es distinto. Usando FieldView™ durante toda 
                        la campaña vas a poder tomar decisiones basadas en tus datos, logrando así maximizar 
                        el rendimiento en cada hectárea haciendo un uso más eficiente de cada uno de tus 
                        recursos. 
                        </p>
                        <p>
                        Desde la presiembra hasta la poscosecha, FieldView te acompaña para que puedas achicar todas las brechas que merman el rendimiento.
                        </p>
                        <a className='conoceMasLink' href="https://climatefieldview.com.ar/?hsLang=en">CONSULTÁ NUESTROS COMBOS FIELDVIEW
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
                        </p>
                        <p>
                            Comprometidos con la sustentabilidad, Bayer fomenta prácticas agrícolas respetuosas 
                            con el medio ambiente, contribuyendo a la seguridad alimentaria global y al bienestar 
                            de las comunidades agrícolas.
                        </p>
                        <a className='conoceMasLink' href="https://www.agro.bayer.com.ar/productos-proteccion-cultivos">TODOS NUESTROS PRODUCTOS
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