import '../css/UbicationComponent.css'

export default function UbicationComponent() {

    return(
        <div className="ubicacion-component">
            <div className="ubicacion-left">
                <div className="container-text">
                    <h2>Contactanos</h2>
                    <ul>
                        <li>
                            <h4>Administración</h4>
                            <a  href="mailto:administracion@terramas.com.ar">administracion@terramas.com.ar</a>
                            <br />
                            <a href="tel:+5492477433335">+54 9 2477-433335</a>
                        </li>
                        <li>
                            <h4 >Logísitica</h4>
                            <a  href="mailto:logistica@terramas.com.ar">logistica@terramas.com.ar</a>
                            <br />
                            <a href="tel:+5492477662610">+54 9 2477-662610</a>
                        </li>
                        <li>
                            <h4 >Ventas</h4>
                            <a  href="mailto:ventas@terramas.com.ar">ventas@terramas.com.ar</a><br />
                            <a  href="mailto:gonzalomartin@terramas.com.ar">gonzalomartin@terramas.com.ar</a>
                            <br />
                            <a href="tel:+5492477468564">+54 9 2477-468564</a>
                        </li>
                        <li>
                            <h4 >Ubicación</h4>
                            <a href="https://maps.app.goo.gl/8q7XKhxXyp9zDB6g8">Av Venini Sur 57, Pergamino, Buenos Aires</a>
                        </li>
                    </ul>                    
                </div>
            </div>
            <iframe title='gmaps' className='ubication-map-container' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13246.993924430994!2d-60.5524147!3d-33.896131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b56ed70ad357%3A0x21cf1cd5706df0f9!2sTerra%20Mas%20S.R.L.%20-%20Venta%20de%20Agroinsumos%20-!5e0!3m2!1sen!2sar!4v1709663461705!5m2!1sen!2sar" loading="lazy"></iframe>
        </div>
    )
}