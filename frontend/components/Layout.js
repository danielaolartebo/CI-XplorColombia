import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      {/* HEADER BEGINS */}
      <header className="main-header">
        <div className="container">
          <div className="nav-header">
            <li><a href="/home" className="white-link">Inicio</a></li>
            <li><a href="/home#createTrip" className="white-link">Crea tu viaje</a></li>
            <li><a href="/home#deals" className="white-link">Nuestras Ofertas</a></li>
            <li><a href="/home#mostpopular" className="white-link">Destinos Populares</a></li>
            <li><a className="white-link">Opciones de Destinos</a>
              <ul className="submenu">
                <li><a href="/createDestination" className="white-link">Crea un destino</a></li>
                <li><a href="/editDestination" className="white-link">Edita un destino</a></li>
                <li><a href="/editDestination" className="white-link">Elimina un destino</a></li>
              </ul>
            </li>
            <Link href='/'><button className="btn_btn_login"> Salir </button></Link>
          </div>
        </div>
      </header>
      {/* HEADER ENDS */}
      <main>
        {children}
      </main>
    </>
  );
}
