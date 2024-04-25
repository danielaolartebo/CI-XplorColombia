import Link from "next/link"

export default function Explore() {
    return (
      <main className="title_container">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="https://kit.fontawesome.com/a076d05399.js"></link>
          
          {/* HEADER BEGINS */}
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

            {/* TRIP DESCRIPTION STARTS */}
            <section id="gtco-welcome" className="bg-white section-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-7 py-5 pl-md-0 pl-4">
                                <div className="heading-section pl-lg-5 ml-md-5">
                                    <h2>
                                        <br></br><br></br>
                                         Explore Package
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>Experience the essence of Colombia with our 'Colombian Odyssey' travel package! Climb the iconic Piedra del Peñol for panoramic views, delight in the charm of Parque del Café, and wander through the surreal landscapes of the Tatacoa Desert. With handpicked accommodations, seamless transportation, and knowledgeable guides, this journey ensures an immersive exploration of Colombia's rich diversity. Embark on an unforgettable adventure through some of the country's most captivating destinations!</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="package-menu">
                                                  <img className="img-fluid img-cover" src="../images/paquete2.png" />
                                              </a>
                                          </div>
                                          <div className="half-trips-container">
                                            <div className="cont-title">
                                                  <div className="sub-title"> Create plan: </div>                                           
                                            </div>

                                             {/* ---------------------- # USER STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-user-plus" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <div className="col-user"><input className="form-user" placeholder="ID" type="id" name="id" required/> </div>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <div className="col-user"><input className="form-user2" placeholder="Full Name" type="name" name="name" required/></div>
                                                </div>
                                            </div>

                                            {/* ---------------------- # USER ENDS ----------------------------*/}

                                            {/* ---------------------- # PEOPLE STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-users" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Number of people </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="menu"> 
                                                        <option value="" disabled selected>Select option</option>
                                                        <option value=""> 1 </option> 
                                                        <option value=""> 2 </option> 
                                                        <option value=""> 3 </option> 
                                                        <option value=""> 4 </option> 
                                                        <option value=""> 5 </option> 
                                                        <option value=""> 6 </option> 
                                                        <option value=""> 7 </option> 
                                                        <option value=""> 8 </option> 
                                                        <option value=""> 9 </option> 
                                                        <option value=""> 10 </option> 
                                                    </select>

                                                </div>
                                            </div>
                                            {/* ---------------------- # PEOPLE ENDS ----------------------------*/}

                                             {/* ---------------------- # DAYS STARTS ----------------------------*/}


                                             <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-plus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Start of Piedra Peñol</p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="start-date" name="start-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-minus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> End of Piedra Peñol </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="end-date" name="end-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-plus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Start of Parque Café </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="start-date" name="start-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-minus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> End of Parque Café </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="end-date" name="end-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-plus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Start of Tatacoa </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="start-date" name="start-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-minus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> End of Tatacoa </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="end-date" name="end-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                             {/* ---------------------- # DAYS ENDS ----------------------------*/}
                                            {/* ---------------------- BUTTON ADD STARTS ----------------------------*/}
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                   
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <ul className="trips-button">
                                                        <li><a href="" className="button-trips">Add</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* ---------------------- BUTTON ADD ENDS ----------------------------*/}
                                          </div>
                                        </div>                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TRIP DESCRIPTION ENDS */}
            
            {/* PRINCING STARTS */}
                <section>
                <div className="cont-pricing"> 
                    <div className="sub-cont-pricing">
                        <div className="title-price" style={{textAlign:'center'}}>Princing & Details</div>
                        <div className="sub-title-price" style={{textAlign:'center'}}>Let's start a new adventure!</div>
                          <div className="columns">
                            <ul className="price">
                              <li className="header">Explore Package</li>
                              <li className="grey">$ 0 COP </li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                          <ul className="price">
                              <li className="blue"><a href="#" className="button">Download Report</a></li>
                            </ul>
                      </div>
                  </div> 
                </section>
              {/* PRINCING ENDS */}
        </main>
    )
}