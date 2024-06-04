'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function deleteDestinationPage() {
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

    async function deleteDestination() {
        if (!selectedDestination) {
            alert("Please select a destination to delete.");
            return;
        }
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5433/destination/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'destinationId': selectedDestination
                }
            });
            if (response.ok) {
                alert('Destination deleted successfully');
                showDestinations();
                setSelectedDestination("");
            } else {
                alert('Failed to delete destination');
            }
        } catch (error) {
            console.error('Error deleting destination:', error);
            alert('An error occurred while deleting the destination');
        }
    }

    return (
        <Layout>
            {/* DELETE TRIP STARTS */}
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/ruiz.jpeg" />
                <div className="createtrip-container">
                    <h4>Delete a Trip</h4>

                    {/* NAME STARTS */}
                    <div className="cont-createtrip">
                        <div className='left-create'>
                            <h5>Name</h5>
                        </div>
                        <div className='right-create'>
                            <div className='right-right-side-delete-trip'>
                                <select
                                    className="dropdown-addtrip"
                                    id="destination"
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                >
                                    <option value="" disabled selected>Select a Destination</option>
                                    {data.map(destination => (
                                        <option key={destination.id} value={destination.id}>{destination.nameD}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* NAME ENDS */}

                    <div className="cont-createtrip">
                        <div className='left-create'>
                        </div>
                        <div className='right-create'>
                            <div className='right-right-side-delete-trip'>
                                <ul className="create-cont-button">
                                    <li className="button-report1">
                                        <a href="#" className="button" onClick={deleteDestination}>Delete</a>
                                    </li>
                                </ul>
                            </div>                    
                        </div>
                    </div>
                    
                    {/* DELETE TRIP ENDS */}
                    <div className='cont-table'>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
