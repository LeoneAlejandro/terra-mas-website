import '../css/NotFoundComponent.css'
import error404 from '../assets/error404.png'
// import allLogos from '../assets/all-logos.png'

export default function NotFoundComponent() {

    return(
        <div className="not-found-component">
            <div className="nfc-topbar"></div>
            <img className='error-404-image' src={error404} alt="" />
            <h1 className='nfc-title'>404: Página no econtrada</h1>
            <p className='nfc-p'>La página que estás buscando no se encuentra disponible
            <br />
            podés volver a nuestra web haciendo click <a href='/' className='nfc-a'>acá</a>.
            </p>
            {/* <img className='signature-logos' src={allLogos} alt="Logos" /> */}
        </div>
    )
}