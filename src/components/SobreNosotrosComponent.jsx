import '../css/SobreNosotros.css'


export default function SobreNosotros() {

    return(

        <div className="sobreNosotrosComponent">
            
            <div className="sobreNosotrosBanner">
                <h1 className='contactoBannerTitulo'>SOBRE NOSOTROS</h1>
            </div>

            <div className="nuestraHisotira">
                <div className="containerText">
                    <h1>Nuestra Historia</h1>
                    <p> 
                        Desde el año 2003 nos dedicamos a brindar productos y servicios agropecuarios, 
                        siendo proveedores exclusivos de Bayer y Monsanto, para facilitar soluciones para 
                        tus cultivos.
                    </p>
                    <p>
                        Asesorate con nuestros ingenieros sobre los mejores híbridos Dekalb para tu siembra, 
                        y nuestra gran variedad de productos de protección de cultivos.
                    </p>
                </div>
            </div>

            <div className="nuestrosProveedores">
                <div className="containerText">
                    <h3>Algunos de nuestros Proveedores</h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}