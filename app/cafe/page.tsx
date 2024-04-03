export default function ParqueCafe() {
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
                  <li><a href="#home" className="white-link">Home</a></li>
                  <li><a href="#aboutus" className="white-link">About us</a></li>
                  <li><a href="#deals" className="white-link">Deals</a></li>
                  <li><a href="#mostpopular" className="white-link">Most Popular</a></li>
                  <li><a href="#contactus" className="white-link">Contact us</a></li>
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
                                        Parque del Café
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>Parque del Café is a theme park located in the Coffee Axis of Colombia, specifically in the municipality of Montenegro, Quindío department. It is one of the most popular tourist destinations in the region, attracting visitors from all over the country and abroad. Dedicated to celebrating and promoting Colombian coffee culture, the park offers an educational, recreational, and cultural experience for the whole family. Visitors can learn about the complete coffee production process through an interactive tour, enjoy thrilling mechanical rides, and witness live shows highlighting the music, dance, and cultural traditions of the coffee-growing region. Additionally, the park features a zoo with a variety of native and exotic animal species, as well as natural areas for walking and enjoying the scenic beauty of the Coffee Axis. In summary, Parque del Café is an iconic tourist destination in Colombia, blending fun, education, and culture around coffee and the rich coffee heritage of the region.</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                              <a href="#" className="thumb-menu">
                                                  <img className="img-fluid img-cover" src="../images/cafe1.png" />
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
                              <li className="header">Parque del Café</li>
                              <li className="grey">$ 350.000 COP </li>
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