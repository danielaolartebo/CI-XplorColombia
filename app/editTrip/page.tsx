import { useState } from 'react';
import Link from 'next/link';

export default function EditTripPage() {

    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

            {/* HEADER STARTS */}
            <header className="main-header">
                <div className="container">
                    <div className="nav-header">
                      <li><a href="/welcome" className="white-link">Home</a></li>
                      <li><a href="/welcome" className="white-link">About us</a></li>
                      <li><a href="/welcome" className="white-link">Deals</a></li>
                      <li><a href="/welcome" className="white-link">Most Popular</a></li>
                      <li><a href="/welcome" className="white-link">Contact us</a></li>
                      <Link href='/'><button className="btn_btn_login"> Log out </button></Link>
                    </div>
                </div>
            </header>
            {/* HEADER ENDS */}

            {/* DELETE TRIP STARTS */}
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/cartagena.png" />
                <div className="addtrip-container">
                    <h4>Edit a Trip</h4>
                    <div className="cont-addtrip">
                        <div className='left-left-side-trip'>
                          <select className="dropdown-addtrip" id="menu"> 
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
                      <div className='left-right-side-trip'>
                          <select className="dropdown-addtrip" id="menu"> 
                                <option value="" disabled selected> Select category</option>
                                <option value=""> Number of people </option> 
                                <option value=""> Transportation </option> 
                                <option value=""> Hotel </option> 
                                <option value=""> Meals </option> 
                                <option value=""> Trip Insurance </option> 
                          </select>
                      </div>
                      <div className='right-right-side-trip'>
                          <select className="dropdown-addtrip" id="menu"> 
                                <option value="" disabled selected> Select option</option>
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
                      <div className='right-left-side-trip'>
                          <div className="button-delete-trip"><a href="#" className="button-trip">Delete</a></div>
                      </div>
                    </div>
                    {/* DELETE TRIP ENDS */}

                    {/* ADD TRIP STARTS */}
                    <div className="cont-addtrip">
                        <div className='left-left-side-trip'>
                          
                        </div>
                        <div className='left-right-side-trip'>
                            
                        </div>
                        <div className='right-right-side-trip'>
                                <div className="col-textbox-container"><input className="txtbox-trip" placeholder="New option" type="text" name="name" required/> </div>
                        </div>
                        <div className='right-left-side-trip'>
                            <div className="button-delete-trip"><a href="#" className="button-add-trip"> Add </a></div>
                        </div>
                    </div>
                    {/* ADD TRIP ENDS */}
                    <div className='cont-table'>
                      <h6>Tabla dinamica deberia de estar aqui que se actualice una vez se elimine o se añada una opcion</h6>
                    </div>
                </div>
            </div>

            {/* Utiliza el componente AddTrip */}
        </main>
    );
}