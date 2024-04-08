import Link from 'next/link';

export default function CreateTripPage() {

    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

            {/* HEADER STARTS */}
            <header className="main-header">
                <div className="container">
                    <div className="nav-header">
                      <li><a href="/welcome" className="white-link">Home</a></li>
                      <li><a href="/welcome" className="white-link">About us</a></li>
                      <li><a href="/welcome" className="white-link">Deals</a></li>
                      <li><a href="/welcome" className="white-link">Most Popular</a></li>
                      <li><a href="/welcome" className="white-link">Contact us</a></li>
                      <Link href='/'><button className="btn_btn_login"> Log out </button></Link>
                    </div>
                </div>
            </header>
            {/* HEADER ENDS */}

            {/* CREATE TRIP STARTS */}
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/ruiz.jpeg" />
                <div className="createtrip-container">
                    <h4>Create a Trip</h4>

                    {/* NAME STARTS */}
                    <div className="cont-createtrip">
                      <div className='left-create'>
                          <h5> Name</h5>
                      </div>
                      <div className='right-create'>
                            <div className='right-right-side-create-trip'>
                                    <div className="col-create-textbox-container"><input className="txtbox-create" placeholder="" type="text" name="name" required/> </div>
                            </div>
                      </div>
                    </div>
                    {/* NAME ENDS */}

                    {/* DESCRIPTION STARTS */}
                    <div className="cont-createtrip">
                      <div className='left-create'>
                          <h5> Description</h5>
                      </div>
                        <div className='right-create'>
                            <div className='right-right-side-create-trip'>
                                <div className="col-create-textbox-container">
                                    <textarea name="textarea"></textarea>
                            </div>
                        </div>
                      </div>
                    </div>
                    {/* DESCRIPTION ENDS */}

                    {/* IMAGE STARTS */}
                    <div className="cont-createtrip">
                      <div className='left-create'>
                          <h5> Image </h5>
                      </div>
                      <div className='right-create'>
                        <div className='right-right-side-create-trip'>
                                <input className="custom-input" type="file" id="myFile" name="filename"/>
                                  
                        </div>                    
                    </div>
                    </div>
                    {/* IMAGE ENDS */}

                    {/* CATEGORIES STARTS */}
                    
                    {/* CATEGORIES ENDS */}

                    <div className="cont-createtrip">
                      <div className='left-create'>
                      </div>
                      <div className='right-create'>
                        <div className='right-right-side-create-trip'>
                            <ul className="create-cont-button">
                                <li className="button-report1"><a href="#" className="button">Create</a></li>
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