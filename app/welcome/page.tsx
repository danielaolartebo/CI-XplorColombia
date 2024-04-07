import Link from "next/link";

export default function Welcome() {
    return (
      <main className="title_container">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  
            {/* HEADER BEGINS */}
            <header className="main-header"> 
              <div className="container">
                <div className="nav-header">
                  <li><a href="#home" className="white-link">Home</a></li>
                  <li><a href="#aboutus" className="white-link">About us</a></li>
                  <li><a href="#deals" className="white-link">Deals</a></li>
                  <li><a href="#mostpopular" className="white-link">Most Popular</a></li>
                  <li><a href="#contactus" className="white-link">Contact us</a></li>
                  <Link href='/'><button className="btn_btn_login"> Log out </button></Link>
                </div>
              </div>
            </header>
            {/* HEADER ENDS */}
  
            {/* HOME PAGE STARTS */}
            <div className="banner" id="home"> 
                <img className="banner-img" src="../images/ima6.png" />
                 <h1 className="title_style">Welcome to Xplor Colombia!</h1>
                <h2 className="description">Let's find your dream vacation</h2>
            </div>
            {/* HOME PAGE ENDS */}
  
  
            {/* ABOUT US PAGE STARTS */}
            <div className="aboutus-container">
              <div className="deals-subtitle" id="aboutus">
                    About us
              </div>
              <div className="text-container">
                  <div className="text-aboutus">
                      We are passionately dedicated to showcasing the beauty and diversity of our beloved country through exciting tours and unforgettable experiences. We are proud to be your gateway to the fascinating world of tourism in Colombia.<br/><br/>
                      Immerse yourself in the magic of our land as you explore emblematic destinations such as Caño Cristales, nature's multicolored treasure that captivates with its crystalline waters and vibrantly colored algae. Feel the adrenaline at the Coffee Park, where coffee culture comes to life in an environment of fun and learning. Embark on a unique adventure to the heights of Nevado del Ruiz, where you will witness the majesty of the Andean landscapes and the wildlife that inhabits them. Admire the stunning landscape of the Cocora Valley, home to the iconic wax palms, the tallest in the world. Discover the magical Lost City, an ancient archaeological wonder hidden in the jungles of the Sierra Nevada de Santa Marta. Explore the paradisiacal beaches and lush jungle of Tayrona Park, where nature welcomes you with open arms. Contemplate the imposing Piedra del Peñol and marvel at the panoramic views it offers from its summit. Immerse yourself in the red and arid desert of Tatacoa, a lunar landscape that will leave you breathless with its unique beauty.<br/><br/>
                      At Xplor Colombia, we are committed to providing you with authentic, safe and memorable experiences that will allow you to discover the true essence of Colombia. Join us and let your adventure begin. Explore Colombia with us and create memories to last a lifetime! Join us on this exciting adventure and let us show you the true heart of Colombia. Your dream trip starts here with Xplor Colombia!
                  </div>
              </div>
            </div>
             {/* ABOUT US PAGE ENDS */}
  
  
            {/* DEALS PAGE STARTS */}
            <div className="package-grid">
              <div className="deals-subtitle" id="deals">
                  Check out our trip deals!
              </div>
              <div className="grid">
              {/* 1 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/cano.jpeg" />
                      <div className="button-container">
                        <Link href='/cano'>
                          <button className="btn_btn" > Caño Cristales </button>
                        </Link>
                      </div>
                </div> 
                {/* 2 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/tayrona.jpg" />
                      <div className="button-container">
                        <Link href='/tayrona'>
                          <button className="btn_btn"> Parque Tayrona </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 3 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/ciudad-perdida.webp" />
                      <div className="button-container">
                        <Link href='/perdida'>
                          <button className="btn_btn"> Ciudad Perdida </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 4 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/tatacoa.webp" />
                      <div className="button-container">
                      <Link href='/tatacoa'>
                          <button className="btn_btn"> Desierto de la Tatacoa </button>
                      </Link>
                      </div>
                        
                </div> 
                {/* 5 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/cafe.webp" />
                      <div className="button-container">
                      <Link href='/cafe'>
                        <button className="btn_btn"> Parque del Café </button>
                      </Link>
                      </div>
                        
                </div> 
                {/* 6 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/penol.jpeg" />
                      <div className="button-container">
                        <Link href='/penol'>
                          <button className="btn_btn"> Piedra del Peñol </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 7 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/nevado.jpeg" />
                      <div className="button-container">
                        <Link href='/ruiz'>
                          <button className="btn_btn"> Nevado del Ruiz </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 8 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/cocora.jpeg" />
                      <div className="button-container">
                        <Link href='/cocora'>
                          <button className="btn_btn"> Valle del Cocora </button>
                        </Link>
                      </div>
                </div> 
              </div>
              <ul className="report1">
                        <li className="button-report1"><a href="/addTrip" className="button">Add/Edit Trip</a></li>
                  </ul>
              </div>
              {/* DEALS PAGE ENDS */}
  
              {/* MOST POPULAR PAGE STARTS */}
                <div className="mostpop-container">
                  <div className="deals-subtitle" id="mostpopular">
                    Get to know our most popular trips
                  </div>
                  <div className="progressbar-container">
                      <div className="">
                          {/* 1 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '95%'} as React.CSSProperties}> Parque Tayrona </div>
                          {/* 2 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '87%'} as React.CSSProperties}> Piedra el Peñol</div>
                          {/* 3 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '80%'} as React.CSSProperties}> Valle del Cocora </div>
                          {/* 4 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '70%'} as React.CSSProperties}> Parque del Café </div>
                          {/* 5 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '65%'} as React.CSSProperties}> Desierto de la Tatacoa </div>
                          {/* 6 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '50%'} as React.CSSProperties}> Nevado del Ruiz </div>
                          {/* 7 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '40%'} as React.CSSProperties}> Caño Cristales </div>
                          {/* 8 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '25%'} as React.CSSProperties}> Ciudad Perdida </div>
                      </div>
                  </div>
                  <ul className="report1">
                        <li className="button-report1"><a href="#" className="button">Download Report</a></li>
                  </ul>
                </div>
              {/* MOST POPULAR PAGE ENDS */}
  
  
              {/* CONTACT US PAGE STARTS */}
              <div className="contactus-container">
                  <img className="contact-img" src="../images/desierto.jpeg"></img>
                  <div className="contact-container">
                  <div className="half-container ">
                    <div className="contactus-subtitle" id="contactus">
                      Contact us
                    </div>
                  <form action="https://formspree.io/f/mknlrooy" method="POST">
                    <div className="form-row">
                        <div className="col-12"><input className="form-control" placeholder="Name" type="text" name="name" required/> </div>
                        <div className="col-12"><input className="form-control" placeholder="Email Address" type="email" name="email" required/></div>
                        <div className="col-12"><textarea className="form-control" placeholder="Message" typeof="text" name="message" required></textarea></div>
                        <div className="button-contact"><button type="submit" className="btn_btn-theme">Send Message</button></div>
                    </div>
                  </form>
                  </div>
                  </div>
              </div>
              {/* CONTACT US PAGE ENDS */}
  
      </main>
    );
  }