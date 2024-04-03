export default function Tatacoa() {
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
                                        Desierto de la Tatacoa
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>The Tatacoa Desert, located in the Huila Department of Colombia, is a mesmerizing landscape characterized by its otherworldly terrain and stark beauty. Despite its name, the Tatacoa Desert is not a true desert but rather a dry tropical forest, known locally as a "desierto" due to its arid conditions. Spanning over 300 square kilometers, this unique ecosystem comprises labyrinthine canyons, towering rock formations, and sandy plains, creating an atmosphere reminiscent of a lunar landscape. The desert's soil, rich in minerals, displays an array of vibrant colors, ranging from deep reds and oranges to shades of gray and purple, especially during sunset, offering photographers and nature enthusiasts a captivating spectacle. Despite its harsh environment, the Tatacoa Desert teems with life, including a diverse array of flora and fauna adapted to survive in this challenging habitat. Visitors can explore the desert on foot or by horseback, marveling at its rugged beauty and immersing themselves in the tranquility of this remote wilderness. As one of Colombia's hidden gems, the Tatacoa Desert offers a unique and unforgettable experience for adventurers seeking to discover the country's natural wonders.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/tatacoa1.jpeg" />
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
                                                    <i className="fa fa-ambulance" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-side">
                                                    <p> Health Insurance </p>
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
                              <li className="header">Desierto de la Tatacoa</li>
                              <li className="grey">$ 750.000 COP </li>
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