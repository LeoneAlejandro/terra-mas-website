import '../css/ContactoComponent.css'


export default function ContactoComponent() {

    return(
        <div className="contactoComponent">
            <div className="contactoBanner">
                <h1 className='contactoBannerTitulo'>NUESTRAS SUCURSALES</h1>


            </div>
            <div className="contactoTerraMas">
                <div className="listaContactosTerraMas">
                <h1>Terra Mas SRL</h1>
                    <div className="ubicationText">
                        <h4 >Administración</h4>
                        <a  href="mailto:administracion@terramas.com.ar">administracion@terramas.com.ar</a>
                        <br />+54 9 2477-433335
                        <h4 >Logísitica</h4>
                        <a  href="mailto:logistica@terramas.com.ar">logistica@terramas.com.ar</a>
                        <br />+54 9 2477-662610
                        <h4 >Ventas</h4>
                        <a  href="mailto:ventas@terramas.com.ar">ventas@terramas.com.ar</a>
                        <br /><a  href="mailto:gonzalomartin@terramas.com.ar">gonzalomartin@terramas.com.ar</a>
                        <br />+54 9 2477-468564
                        <h4 >Ubicación</h4>
                        Av Venini Sur 57, Pergamino, Buenos Aires
                    </div>
                </div>
                    <iframe className='contactosGoogleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13246.993924430994!2d-60.5524147!3d-33.896131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b56ed70ad357%3A0x21cf1cd5706df0f9!2sTerra%20Mas%20S.R.L.%20-%20Venta%20de%20Agroinsumos%20-!5e0!3m2!1sen!2sar!4v1709663461705!5m2!1sen!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className="contactoTerraSalto">
                <iframe className='contactosGoogleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13184.074305528537!2d-60.2330467!3d-34.2990707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b912bd757c25d1%3A0xb348ecc73279a0c1!2sTerra%20Salto%20S.R.L.!5e0!3m2!1sen!2sar!4v1709840673984!5m2!1sen!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="listaContactosTerraSalto">
                <h1>Terra Salto SRL</h1>
                    <div className="ubicationText">
                        <h4 >Administración</h4>
                        <a  href="mailto:administracion@terrasalto.com.ar">administracion@terrasalto.com.ar</a>
                        <br />+54 9 2474-424903
                        <h4 >Ventas</h4>
                        <a  href="mailto:ventas@terrasalto.com.ar">ventas@terrasalto.com.ar</a>
                        <br />+54 9 2477-687667
                        <h4 >Ubicación</h4>
                        Av Italia 399 (esquina San Juan), Salto, Buenos Aires
                    </div>
                </div>
            </div>
        </div>
    )
}