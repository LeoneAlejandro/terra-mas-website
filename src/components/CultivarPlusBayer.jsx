import '../css/CultivarPlusBayer.css'

export default function CultivarPlusBayer() {

    return(
        <div className="cultivarPlusBayer">
            <div className="cultivarPlus">
                <div className="cultivarPlusTexto">
                    <h1 className="cultivarPlusTitulo">
                        PROGRAMA CULTIVAR
                    </h1>
                    <p className="cultivarPlusParagraph">
                        <span style={{fontWeight: 'bold'}}> CULTIVAR</span> es el programa más <span style={{fontWeight: 'bold'}}> COMPLETO</span> y <span style={{fontWeight: 'bold'}}> EXCLUSIVO</span> del mercado. 
                        El objetivo del programa es brindarle <span style={{fontWeight: 'bold'}}> SEGURIDAD</span> al productor, 
                        ofreciéndole una garantía de resiembra de semillas de maíz DEKALB 
                        ante eventos como granizo, encharcamiento o helada en el caso de la región templada. 
                        <br />
                        <br />
                        Conocé más sobre nuestros planes <span style={{fontWeight: 'bold'}}> Cultivar</span> y <span style={{fontWeight: 'bold'}}> Cultivar Plus</span>, y 
                    </p>
                    <a className='conoceMasLink' href="">CONOCE MAS</a>
                </div>
                <div className="cultivarPlusImagen">
                </div>
            </div>

            <div className="bayerInsumos">
                <div className="bayerInsumosImagen"></div>

                <div className="bayerInsumosTexto">
                <h1 className="bayerInsumosTitulo">BAYER INSUMOS</h1>
                <p className="bayerInsumosParrafo">
                    Bayer se destaca como líder mundial en soluciones agrícolas, 
                    ofreciendo productos innovadores para la protección y mejora de los rendimientos 
                    de los cultivos. Desde herbicidas y fungicidas hasta insecticidas avanzados, la 
                    cartera de Bayer aborda desafíos específicos, asegurando cosechas saludables. 
                    <br />
                    <br />
                    Comprometidos con la sostenibilidad, Bayer fomenta prácticas agrícolas respetuosas 
                    con el medio ambiente, contribuyendo a la seguridad alimentaria global y al bienestar 
                    de las comunidades agrícolas.
                </p>
                    <a className='conoceMasLink' href="">CONOCE MAS</a>
                </div>
            </div>
        </div>

    )
}