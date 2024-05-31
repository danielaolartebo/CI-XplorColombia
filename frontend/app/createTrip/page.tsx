'use client';
import Link from 'next/link';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';


export default function CreateTripPage() {
    const [destination, setDestination] = useState({
        name: '',
        description: '',
        price: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setDestination(prevDestination => ({
                ...prevDestination,
                [name]: files[0]
            }));
        } else {
            setDestination(prevDestination => ({
                ...prevDestination,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const initPackage = {
          id: 0,
          name: "NONE",
          state: "A"
        };

        const dataDestination = {
          name: destination.name,
          price: destination.price,
          //description: destination.description,
          package_id: initPackage,
          state: "A"
        };

        console.log('Destination:', destination);
        console.log('Img:', destination.image);
        console.log('Destination data:', dataDestination);

        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5433/destination/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataDestination)
          });

          const responseData = await response.json();
          console.log('Destination ID:', responseData.id);

          // Subir la imagen a Firebase Storage
          if (destination.image) {
            const storageRef = ref(storage, `Destinations/${responseData.id}`);
            await uploadBytes(storageRef, destination.image);
            const imageUrl = await getDownloadURL(storageRef);
            console.log('Image URL:', imageUrl);
          }

          // Borrar parámetros de entrada
          setDestination({
            name: '',
            description: '',
            price: '',
            image: null
          });

        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

            {/* CREATE TRIP STARTS */}
            <div className="login-first-container" id="home">

                {/* HEADER STARTS */}
                <header className="main-header">
                    <div className="container">
                        <div className="nav-header">
                            <Link href='/welcome'><button className="btn_btn_login"> Go back </button></Link>
                            <li><a href="/welcome" className="white-link">Home</a></li>
                            <li><a href="/welcome" className="white-link">Create trip</a></li>
                            <li><a href="/welcome" className="white-link">Deals</a></li>
                            <li><a href="/welcome" className="white-link">Most Popular</a></li>
                            <li>
                                <a className="white-link">Destination options</a>
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

                <img className="login-banner-img" src="../images/ruiz.jpeg" />
                <div className="createtrip-container">
                    <h4>Create a Destination</h4>

                    {/* FORM STARTS */}
                    <form onSubmit={handleSubmit}>
                        {/* NAME */}
                        <div className="cont-createtrip">
                            <div className='left-create'>
                                <h5> Name</h5>
                            </div>
                            <div className='right-create'>
                                <div className='right-right-side-create-trip'>
                                    <div className="col-create-textbox-container">
                                        <input className="txtbox-create" placeholder="" type="text" name="name" value={destination.name} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="cont-createtrip">
                            <div className='left-create'>
                                <h5> Description</h5>
                            </div>
                            <div className='right-create'>
                                <div className='right-right-side-create-trip'>
                                    <div className="col-create-textbox-container">
                                        <textarea name="description" value={destination.description} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="cont-createtrip">
                            <div className='left-create'>
                                <h5> Price</h5>
                            </div>
                            <div className='right-create'>
                                <div className='right-right-side-create-trip'>
                                    <div className="col-create-textbox-container">
                                        <input className="txtbox-create" placeholder="$0.00" type="text" name="price" value={destination.price} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="cont-createtrip">
                            <div className='left-create'>
                                <h5> Image </h5>
                            </div>
                            <div className='right-create'>
                                <div className='right-right-side-create-trip'>
                                    <input className="custom-input" type="file" id="myFile" name="image" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        {/* CATEGORIES */}
                        {/* Aquí puedes agregar campos para las categorías, si es necesario */}

                        {/* SUBMIT BUTTON */}
                        <div className="cont-createtrip">
                            <div className='left-create'>
                            </div>
                            <div className='right-create'>
                                <div className='right-right-side-create-trip'>
                                    <ul className="create-cont-button">
                                        <li className="button-report1"><button type="submit" className="button">Create</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* FORM ENDS */}

                    {/* CREATE TRIP ENDS */}
                    <div className='cont-table'>
                    </div>
                </div>
            </div>
        </main>
    );
}
