'use client';

import Link from "next/link";
import { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function Welcome() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/home#createTrip') {
      document.getElementById('createTrip')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (path === '/home#deals') {
      document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (path === '/home#mostpopular') {
      document.getElementById('mostpopular')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
      

    return (
      <Layout>
            {/* HOME PAGE STARTS */}
            <div className="banner" id="home" > 
                <img className="banner-img" src="../images/ima6.png" />
                 <h1 className="title_style">Bienvenido a Xplor Colombia!</h1>
                <h2 className="description">Busquemos las vacaciones de tus sueños</h2>
            </div >
            {/* HOME PAGE ENDS */}
  
  
            {/* CREATE TRIP PAGE STARTS */}
            <div  id="createTrip">-</div>
            <div className="aboutus-container" >
                  <div className="container-centered">
                    <div className="deals-subtitle">
                      Create trip
                    </div>
                    <div className="items-container">
                      <div className="text-aboutus">
                        {/* ---------------------- ID AND USER NAME ----------------------------*/}
                        <div className="cont-subtitle">
                          <div className="items-half1">
                            <input className="form-items1" placeholder="ID" type="id" name="id" required/>
                          </div>
                          <div className="items-half2">
                            <input className="form-items2" placeholder="Full Name" type="name" name="name" required/>
                          </div>
                        </div>

                        {/* ---------------------- NUMBER OF PEOPLE ----------------------------*/}
                        <div className="cont-subtitle">
                          <div className="items-half1">
                              <div className="text-items">
                                  <div className="text-design">Number of people </div>
                              </div>
                          </div>
                          <div className="items-half2">
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

                        {/* ---------------------- DESTINATIONS ----------------------------*/}
                        <div className="cont-subtitle">
                          <div className="items-half1">
                              <div className="text-items">
                                  <div className="text-design">Destination 1 </div>
                              </div>
                          </div>
                          <div className="items-half2">
                            <select className="dropdown-items" id="menu"> 
                                <option value="" disabled selected> Select trip</option>
                                <option value=""> Caño Cristales </option> 
                                <option value=""> Parque Tayrona </option> 
                                <option value=""> Ciudad Perdida </option> 
                                <option value=""> Desierto de la Tatacoa </option> 
                                <option value=""> Parque del Café </option> 
                                <option value=""> Piedra del Peñol </option> 
                                <option value=""> Nevado del Ruiz </option> 
                                <option value=""> Valle del Cocora </option>
                            </select>
                           </div>
                          </div>
                           {/* ---------------------- ADD BUTTON ----------------------------*/}
                           <div className="cont-subtitle">
                          <div className="items-half1">
                              
                          </div>
                          <div className="items-half2">
                              <li className="button-14"><a href="#" className="button"> Add  </a></li>
                              <li className="button-14"><a href="#" className="button">Delete</a></li>
                           </div>
                          </div>
                      </div>
                </div>
              </div>
              {/* CREATE TRIP PAGE ENDS */}

              {/* PRINCING STARTS */}
              <section>
                <div className="cont-pricing2"> 
                  <div className="title-price" style={{textAlign:'center'}}>Princing & Details</div>
                  <div className="columns">
                    <ul className="price">
                      <li className="header">Trip name</li>
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
                  <ul className="price2">
                    <li><a href="#" className="button">Download</a></li>
                  </ul>
                </div> 
              </section>
              {/* PRINCING ENDS */}
            </div>
            {/* CREATE TRIP PAGE ENDS */}
  
  
            {/* DEALS PAGE STARTS */}
            <div className="package-grid" id="deals">
              <div className="deals-subtitle">
                  Check out our trip deals!
              </div>
              <div className="grid">
              {/* 1 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/paquete1.png" />
                      <div className="button-container">
                        <Link href='/package-nature'>
                          <button className="btn_btn" > Deal Nature </button>
                        </Link>
                      </div>
                </div> 
                {/* 2 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/paquete2.png" />
                      <div className="button-container">
                        <Link href='/package-explore'>
                          <button className="btn_btn"> Deal Explore </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 3 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/paquete3.png" />
                      <div className="button-container">
                        <Link href='/package-discover'>
                          <button className="btn_btn"> Deal Discover </button>
                        </Link>
                      </div>
                        
                </div> 
                {/* 4 box */}
                <div className="grid-container">
                      <img className="grid-img" src="../images/paquete4.png" />
                      <div className="button-container">
                      <Link href='/package-wander'>
                          <button className="btn_btn"> Deal Wander </button>
                      </Link>
                      </div>
                        
                </div> 
              </div>
              </div>
              {/* DEALS PAGE ENDS */}
  
              {/* MOST POPULAR PAGE STARTS */}
                <div className="mostpop-container" id="mostpopular">
                  <div className="deals-subtitle">
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
      </Layout>
    );
  }