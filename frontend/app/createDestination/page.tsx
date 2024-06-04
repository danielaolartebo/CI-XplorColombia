'use client';
import Link from 'next/link';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import Layout from '../../components/Layout';
import '../../styles/createDestination.css';



export default function createDestinationPage() {
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
          basePrice: destination.price,
          description: destination.description,
          //package_id: initPackage,
          state: "A",
          maxPeople: 10
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
          /*setDestination({
            name: '',
            description: '',
            price: '',
            image: null
          });*/
          window.location.reload();


        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <Layout>
                <div className="login-first-container" id="home">
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
        </Layout>
    );
}
