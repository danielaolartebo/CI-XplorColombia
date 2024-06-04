'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function EditTripPage() {
    useEffect(() => {
        showDestinations();
    }, []);
    const [data, setData] = useState([]);

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
    };

    return (
        <Layout>
            {/* DELETE TRIP STARTS */}
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/cartagena.png" />
                <div className="addtrip-container">
                    <h4>Edit a Trip</h4>
                    <div className="cont-addtrip">
                        <div className='left-left-side-trip'>
                            <select className="dropdown-addtrip" id="menu"> 
                                <option value="" disabled selected> Select trip</option>
                                {data.map(destination => (
                                    <option key={destination.id} value={destination.id}>{destination.nameD}</option>
                                ))}
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
        </Layout>
    );
}
