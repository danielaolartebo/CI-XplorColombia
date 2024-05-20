import Link from "next/link"

export default function Tayrona() {
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
                                        Parque Tayrona
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>Tayrona National Park, nestled along the Caribbean coast of Colombia, is a breathtaking natural sanctuary renowned for its pristine beaches, dense tropical forests, and rich biodiversity. Encompassing a vast expanse of coastal and mountainous terrain, Tayrona offers visitors a unique opportunity to explore diverse ecosystems teeming with life. The park is home to a wide array of flora and fauna, including howler monkeys, jaguars, and colorful bird species. Its secluded beaches, such as Playa Cristal and Cabo San Juan, boast crystal-clear waters and powdery white sands, providing the perfect setting for relaxation and outdoor adventure. Hiking trails meander through lush jungles and coastal cliffs, offering panoramic views of the Caribbean Sea. Tayronas cultural significance is also evident in the archaeological sites scattered throughout the park, reflecting the ancient heritage of the indigenous Tayrona people who once inhabited the region. With its striking natural beauty and cultural heritage, Tayrona National Park stands as a must-visit destination for nature enthusiasts and explorers alike.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/tayrona1.jpeg" />
                                              </a>
                                          </div>
                                          <div className="half-trips-container">
                                            <div className="cont-title">
                                                  <div className="sub-title"> Create plan: </div>                                           
                                            </div>

                                             {/* ---------------------- # DAYS STARTS ----------------------------*/}


                                             <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-plus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Start of trip </p>
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
                                                    <p> End of trip </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="end-date" name="end-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                             {/* ---------------------- # DAYS ENDS ----------------------------*/}

                                            {/* ---------------------- TRANSPORTATION STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-bus" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Transportation</p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="menu"> 
                                                        <option value="" disabled selected>Select option</option>
                                                        <option value=""> No </option> 
                                                        <option value=""> From/To Bogotá </option> 
                                                        <option value=""> From/To Medellín </option> 
                                                        <option value=""> From/To Cali </option> 
                                                        <option value=""> From/To Pereira </option> 
                                                        <option value=""> From/To Bucaramanga </option> 
                                                        <option value=""> From/To Cucuta </option> 
                                                        <option value=""> From/To Barranquilla </option> 
                                                        <option value=""> From/To Santa Marta </option> 
                                                        <option value=""> From/To Manizales </option> 
                                                        <option value=""> From/To Villavicencio </option> 
                                                        <option value=""> From/To Neiva </option> 
                                                        <option value=""> From/To Montería </option> 
                                                        <option value=""> From/To Pasto </option> 
                                                        <option value=""> From/To Popayan </option> 
                                                        <option value=""> From/To Pasto </option>
                                                        <option value=""> Other </option>
                                                    </select>

                                                </div>
                                            </div>

                                            {/* ---------------------- TRANSPORTATION ENDS ----------------------------*/}

                                             {/* ---------------------- HOTEL STARTS ----------------------------*/}

                                             <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-building" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Hotel </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="menu"> 
                                                        <option value="" disabled selected>Select option</option>
                                                        <option value=""> No </option> 
                                                        <option value=""> Ecohabs Tayrona </option> 
                                                        <option value=""> Cabañas Arrecifes </option> 
                                                        <option value=""> Ecohotel Playa Koralia </option> 
                                                        <option value=""> Villa Maria Tayrona </option> 
                                                        <option value=""> Camping en el Parque Tayrona </option> 
                                                    </select>

                                                </div>
                                            </div>

                                            {/* ---------------------- HOTEL ENDS ----------------------------*/}

                                            {/* ---------------------- FOOD STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-cutlery" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Meals </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="menu"> 
                                                        <option value="" disabled selected>Select option</option>
                                                        <option value=""> No </option> 
                                                        <option value=""> Breakfast Only </option> 
                                                        <option value=""> Lunch Only </option> 
                                                        <option value=""> Dinner Only </option> 
                                                        <option value=""> Breakfast, Lunch, Dinner </option> 
                                                    </select>

                                                </div>
                                            </div>

                                            {/* ---------------------- FOOD ENDS ----------------------------*/}

                                            {/* ---------------------- TRIP INSURANCE STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-ambulance" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Trip Insurance </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="menu"> 
                                                        <option value="" disabled selected>Select option</option>
                                                        <option value=""> Yes </option> 
                                                        <option value=""> No </option>  
                                                    </select>

                                                </div>
                                            </div>

                                            {/* ---------------------- HEALTH INSURANCE ENDS ----------------------------*/}
                                            {/* ---------------------- BUTTON ADD STARTS ----------------------------*/}
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                   
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <ul className="trips-button">
                                                        <li><a href="/welcome" className="button-trips">Add</a></li>
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
        </main>
    )
}