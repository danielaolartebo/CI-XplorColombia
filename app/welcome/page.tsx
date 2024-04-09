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
                  <li><a href="#create" className="white-link">Create trip</a></li>
                  <li><a href="#deals" className="white-link">Deals</a></li>
                  <li><a href="#mostpopular" className="white-link">Most Popular</a></li>
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
  
            {/* HOME PAGE STARTS */}
            <div className="banner" id="home"> 
                <img className="banner-img" src="../images/ima6.png" />
                 <h1 className="title_style">Welcome to Xplor Colombia!</h1>
                <h2 className="description">Let's find your dream vacation</h2>
            </div>
            {/* HOME PAGE ENDS */}
  
  
            {/* CREATE TRIP PAGE STARTS */}
            <div className="aboutus-container">
              <div className="deals-subtitle" id="create">
                    Create trip
              </div>
              <div className="text-container">
                  <div className="text-aboutus">
                      <br/><br/>
                      <br/><br/>
                  </div>
              </div>
            </div>
             {/* CREATE TRIP PAGE ENDS */}
  
  
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
  
      </main>
    );
  }