'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function Welcome() {
  useEffect(() => {
        showDestinations();
    }, []);
    
    const [data, setData] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState("");

    async function showDestinations(){
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5433/destination/getAll', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          console.log("Lista de destinos:", data);
          setData(data); // Almacena los datos en el estado local
        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    }

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
                        {/* ---------------------- NIT AND USER NAME ----------------------------*/}
                        <div className="cont-subtitle">
                          <div className="items-half1">
                            <input className="form-items1" placeholder="NIT" type="nit" name="nit" required/>
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
                          <div className='right-create'>
                                    <div className='right-right-side-create-trip'>
                                        <div className="col-create-textbox-container">
                                            <input className="txtbox-create" placeholder="0" type="text" name="maxPeople" />
                                        </div>
                                    </div>
                                </div>
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
                          <select
                                    className="dropdown-addtrip"
                                    id="destination"
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                >
                                    <option value="" disabled selected>Destination 1</option>
                                    {data.map(destination => (
                                        <option key={destination.id} value={destination.id}>{destination.nameD}</option>
                                    ))}
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
                      <li className="header">
                        <th>Trip name</th></li>
                      <li className="grey"><tbody>
                        $ 0 COP 
                        {/*dataModification.map((modification) => (
                            <tr key={modification.id} className="user-item">
                                <td>{modification.id}</td>
                            </tr>
                        ))*/}</tbody></li>
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
                    Get to know our most popular destinations
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

               {/* MOST POPULAR PAQUETE */}
               <div className="mostpop-container" id="mostpopular">
                  <div className="deals-subtitle">
                    Get to know our most popular package
                  </div>
                  <div className="progressbar-container">
                      <div className="">
                          {/* 1 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '95%'} as React.CSSProperties}> Nature </div>
                          {/* 2 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '87%'} as React.CSSProperties}> Wonder</div>
                          {/* 3 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '80%'} as React.CSSProperties}> Explore </div>
                          {/* 4 PROGRESS BAR */}
                          <div className="w3-container w3-blue w3-round-xlarge" style={{ width: '70%'} as React.CSSProperties}> Discover </div>
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