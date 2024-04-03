export default function Cano() {
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
                                        Caño Cristales
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>Caño Cristales, often referred to as the "River of Five Colors" or the "Liquid Rainbow," is a mesmerizing natural wonder located in the Serranía de la Macarena region of Colombia. Renowned for its vibrant hues, particularly during the months of July through November, Caño Cristales captivates visitors with its stunning display of colors. The river's unique shades of red, blue, green, yellow, and black are attributed to the presence of various aquatic plants, including the endemic Macarenia clavigera. As sunlight filters through the water, it illuminates the riverbed, creating a spectacular kaleidoscope of colors. Visitors can embark on guided tours to explore the pristine landscapes surrounding Caño Cristales, immersing themselves in the unparalleled beauty of this natural gem.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/cano1.jpeg" />
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
                                                    <i className="fa fa-coffee" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Breaskfast </p>
                                                </div>
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-cutlery" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Lunch </p>
                                                </div>
                                            </div>
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-side">
                                                    <i className="fa fa-camera" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Photo session </p>
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
                              <li className="header">Caño Cristales</li>
                              <li className="grey">$ 200.000 COP </li>
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