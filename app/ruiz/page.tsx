export default function Ruiz() {
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
                  <li><a href="/" className="white-link">Home</a></li>
                  <li><a href="/" className="white-link">About us</a></li>
                  <li><a href="/" className="white-link">Deals</a></li>
                  <li><a href="/" className="white-link">Most Popular</a></li>
                  <li><a href="/" className="white-link">Contact us</a></li>
                  <button className="btn_btn_login"> Login/Register </button>
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
                                        Nevado del Ruiz
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>The Nevado del Ruiz, towering as the highest volcano in the Colombian Andes, is a majestic natural wonder that commands attention with its snow-capped peak and rugged beauty. Located within Los Nevados National Natural Park in the Cordillera Central range, this stratovolcano is renowned for its imposing presence and geological significance. Despite its breathtaking vistas and picturesque glaciers, the Nevado del Ruiz holds a tumultuous history, as it remains an active volcano with occasional eruptions. The most devastating eruption in recent history occurred in 1985, resulting in significant loss of life and extensive damage to surrounding areas. Today, visitors can explore the park's diverse ecosystems, which range from paramo grasslands to cloud forests, and witness the awe-inspiring spectacle of the Nevado del Ruiz from various vantage points. While its volatile nature demands caution, the Nevado del Ruiz continues to captivate adventurers and nature enthusiasts alike, offering a glimpse into the powerful forces that shape our planet.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/ruiz1.webp" />
                                              </a>
                                          </div>
                                          <div className="half-trips-container">
                                            <div className="cont-title">
                                                  <div className="sub-title"> What do we offer? </div>                                           
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-bus" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Transportation </p>
                                                </div>
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-bed" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Accommodation </p>
                                                </div>
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-gift" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Souvenir </p>
                                                </div>
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-ambulance" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Health Insurance </p>
                                                </div>
                                            </div>
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
                              <li className="header">Nevado del Ruiz</li>
                              <li className="grey">$ 700.000 COP </li>
                              <li>Any weekend of the year</li>
                              <li>Same price all year long</li>
                              <li>Saturday to Sunday accomodation</li>
                              <li>All the information is send via Whatsapp once purchased</li>
                            </ul>
                          </div>
                          <ul className="price">
                              <li className="blue"><a href="#" className="button">Buy now</a></li>
                            </ul>
                      </div>
                  </div> 
                </section>
              {/* PRINCING ENDS */}
        </main>
    )
}