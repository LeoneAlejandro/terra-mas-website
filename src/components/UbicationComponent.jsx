import '../css/UbicationComponent.css'

export default function UbicationComponent() {

    return(
        <div className="ubicacionComponent">
            <div className="ubicacionIzquierda">
                <div className="ubicationText">
                    <h1 className='ubicacionTitle'>Contactanos</h1>
                        <h3 className="contactanosH3">Administración</h3>
                        <a className='contactanosLine' href="mailto:administracion@terramas.com.ar">administracion@terramas.com.ar</a>
                        +54 9 2477-433335
                        <h3 className="contactanosH3">Logísitica</h3>
                        <a className='contactanosLine' href="mailto:logistica@terramas.com.ar">logistica@terramas.com.ar</a>
                        +54 9 2477-662610
                        <h3 className="contactanosH3">Ventas</h3>
                        <a className='contactanosLine' href="mailto:ventas@terramas.com.ar">ventas@terramas.com.ar</a>
                        <a className='contactanosLine' href="mailto:gonzalomartin@terramas.com.ar">gonzalomartin@terramas.com.ar</a>
                        +54 9 2477-468564
                        <h3 className="contactanosH3">Ubicación</h3>
                        Av Venini Sur 57, Pergamino, Buenos Aires
                </div>

                {/* <p className="ubicationText">
                    <ul className='contactosUbicacion'>
                        Administración
                            <li><a href="mailto:administracion@terramas.com.ar">administracion@terramas.com.ar</a></li>
                            <li>+54 9 2477-433335</li>
                        Logísitica
                            <li><a href="mailto:logistica@terramas.com.ar">logistica@terramas.com.ar</a></li>
                            <li>+54 9 2477-662610</li>
                        Ventas
                            <li><a href="mailto:ventas@terramas.com.ar">ventas@terramas.com.ar</a></li>
                            <li><a href="mailto:gonzalomartin@terramas.com.ar">gonzalomartin@terramas.com.ar</a></li>
                            <li>+54 9 2477-468564</li>
                        Ubicación
                            <li>Av Venini Sur 57, Pergamino, Buenos Aires</li>
                    </ul>
                </p> */}
            </div>
            {/* <a href="https://maps.app.goo.gl/o1DJXqmU6EXb8iXu7" className="ubicacionImagen"></a> */}
            <iframe className='googleMapTM' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13246.993924430994!2d-60.5524147!3d-33.896131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b56ed70ad357%3A0x21cf1cd5706df0f9!2sTerra%20Mas%20S.R.L.%20-%20Venta%20de%20Agroinsumos%20-!5e0!3m2!1sen!2sar!4v1709663461705!5m2!1sen!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}