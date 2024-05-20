import Link from 'next/link';

export default function DeleteTripPage() {

    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

            {/* CREATE TRIP STARTS */}
            <div className="login-first-container" id="home">

            {/* HEADER STARTS */}
            <header className="main-header"> 
              <div className="container">
                <div className="nav-header">
                  <Link href='/welcome'><button className="btn_btn_login"> Go back </button></Link>
                  <li><a href="/welcome" className="white-link">Home</a></li>
                  <li><a href="/welcome" className="white-link">Create trip</a></li>
                  <li><a href="/welcome" className="white-link">Deals</a></li>
                  <li><a href="/welcome" className="white-link">Most Popular</a></li>
                  <li><a className="white-link">Destionation options</a>
                      <ul className="submenu">
                          <li><a href="/createTrip" className="white-link">Create destination</a></li>
                          <li><a href="/editTrip" className="white-link">Edit destination</a></li>
                          <li><a href="/deleteTrip" className="white-link">Delete destination</a></li>
                      </ul>
                  </li>
                  <Link href='/'><button className="btn_btn_login"> Log out </button></Link>
                </div>
              </div>
            </header>
            {/* HEADER ENDS */}


                <img className="login-banner-img" src="../images/ruiz.jpeg" />
                <div className="createtrip-container">
                    <h4>Delete a Trip</h4>

                    {/* NAME STARTS */}
                    <div className="cont-createtrip">
                      <div className='left-create'>
                          <h5> Name</h5>
                      </div>
                      <div className='right-create'>
                            <div className='right-right-side-delete-trip'>
                                <select className="dropdown-deletetrip" id="menu"> 
                                    <option value="" disabled selected> Select trip</option>
                                    <option value=""> Caño Cristales </option> 
                                    <option value=""> Parque Tayrona </option> 
                                    <option value=""> Ciudad Perdida </option> 
                                    <option value=""> Desierto de la Tatacoa </option> 
                                    <option value=""> Parque del Café </option> 
                                    <option value=""> Piedra del Peñol </option> 
                                    <option value=""> Nevado del Ruiz </option> 
                                    <option value=""> Valle del Cocora </option> 
                            </select>
                            </div>
                      </div>
                    </div>
                    {/* NAME ENDS */}

                    <div className="cont-createtrip">
                      <div className='left-create'>
                      </div>
                      <div className='right-create'>
                        <div className='right-right-side-delete-trip'>
                            <ul className="create-cont-button">
                                <li className="button-report1"><a href="#" className="button">Delete</a></li>
                            </ul>
                        </div>                    
                    </div>
                    </div>
                    
                    {/* CREATE TRIP ENDS */}
                    <div className='cont-table'>
                    </div>
                </div>
            </div>

            {/* Utiliza el componente AddTrip */}
        </main>
    );
}