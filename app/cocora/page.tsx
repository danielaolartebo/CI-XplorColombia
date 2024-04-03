export default function Cocora() {
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
                                        Valle del Cocora
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>The Cocora Valley, nestled within the breathtaking landscapes of the Colombian Andes near the town of Salento, is a natural paradise renowned for its towering wax palm trees and stunning vistas. Stretching over lush green hillsides and mist-shrouded mountains, the valley is home to the iconic wax palms, which can reach heights of up to 60 meters, making them the tallest palm trees in the world. These majestic trees, with their slender trunks and feathery fronds, create a surreal and enchanting atmosphere that captivates visitors from around the globe. The Cocora Valley is not only a sanctuary for these emblematic palms but also harbors a rich diversity of flora and fauna, including colorful hummingbirds and elusive spectacled bears. Visitors can explore the valley along well-marked hiking trails, winding through cloud forests and past gurgling streams, offering ample opportunities to immerse themselves in the natural beauty and tranquility of this pristine wilderness. With its breathtaking landscapes and unique biodiversity, the Cocora Valley stands as a testament to Colombia's remarkable natural heritage and beckons adventurers to discover its hidden treasures.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/cocora1.jpeg" />
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
                              <li className="header">Valle del Cocora</li>
                              <li className="grey">$ 465.000 COP </li>
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