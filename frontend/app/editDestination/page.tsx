'use client';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { set } from 'firebase/database';

export default function editDestinationPage() {
    useEffect(() => {
        showDestinations();
    }, []);
    
    const [listDestinations, setListDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDeleteOption, setSelectedDeleteOption] = useState("");
    const [options, setOptions] = useState([]);
    const [deleteOptions, setDeleteOptions] = useState([]);
    let idDestination = "";

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
          const listDestinations = await response.json();
          console.log("Lista de destinos:", listDestinations);
          setListDestinations(listDestinations);
        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    }

    //--------------------------------------                     Funciones para transporte
    async function createTransportationOption() {
        console.log("Estamos en crear opcion de transporte")
        const transportationNameElement = document.getElementById('transportation-name') as HTMLInputElement;
        const transportationPriceElement = document.getElementById('transportation-price') as HTMLInputElement;
        
        if (transportationNameElement && transportationPriceElement) {
            const transportationName = transportationNameElement.value;
            const transportationPrice = transportationPriceElement.value;

            console.log("Nombre del transporte:", transportationName);
            console.log("Precio del transporte:", transportationPrice);

            // Implementar fetch para crear opción de transporte
            const destination = {
                id: selectedDestination
            };
            const transportation = {
                name: transportationName,
                price: transportationPrice,
                state: "A",
                destination:destination
            };
            
            console.log(JSON.stringify(transportation));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/transportation/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(transportation)
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }

            // Una vez completada la solicitud, limpiar los inputs
            transportationNameElement.value = '';
            transportationPriceElement.value = '';
            loadTransportationOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    async function loadTransportationOptions() {
        // Implementar fetch para cargar opciones de transporte
        console.log("Estamos en cargar opcion de transporte")
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5433/transportation/PerDestination`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'idDestination' : selectedDestination
                }
            });
            const deleteOptions = await response.json();
            setDeleteOptions(deleteOptions);
            console.log(deleteOptions)
        } catch (error) {
            console.error('Error al cargar las opciones de transporte:', error);
        }
    }

    async function deleteTransportationOption() {
        console.log("Estamos en eliminar opcion de transporte")
        const selectedTransportationOptionElement = document.getElementById('existing-transportation-options') as HTMLInputElement;
        
        if (selectedTransportationOptionElement) {
            console.log(parseInt(selectedTransportationOptionElement.value));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/transportation/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(parseInt(selectedTransportationOptionElement.value))
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }

            loadTransportationOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }
    

    //--------------------------------------                  Funciones para Alojamiento
    async function createAccommodationOption() {
        console.log("Estamos en crear opcion de alojamiento")
        const accommodationLodgingElement = document.getElementById('accommodation-lodging') as HTMLInputElement;
        const accommodationTypeElement = document.getElementById('accommodation-type') as HTMLInputElement;
        const accommodationPriceElement = document.getElementById('accommodation-price') as HTMLInputElement;
        
        if (accommodationLodgingElement && accommodationTypeElement && accommodationPriceElement) {
            const accommodationLodging = accommodationLodgingElement.value;
            const accommodationType = accommodationTypeElement.value;
            const accommodationPrice = accommodationPriceElement.value;

            console.log("Hotel del Alojamiento:", accommodationLodging);
            console.log("Tipo de habitacion del Alojamiento:", accommodationType);
            console.log("Precio del Alojamiento:", accommodationPrice);

            // Implementar fetch para crear opción de alojamiento
             const destination = {
                id: selectedDestination
            };
            const accommodation = {
                name: accommodationType,
                price: accommodationPrice,
                state: "A",
                destination:destination,
                lodging:accommodationLodging
            };
            
            console.log(JSON.stringify(accommodation));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/accommodation/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(accommodation)
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }
            // Una vez completada la solicitud, limpiar los inputs
            accommodationLodgingElement.value = '';
            accommodationTypeElement.value = '';
            accommodationPriceElement.value = '';
            loadAccommodationOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    async function loadAccommodationOptions() {
        console.log("Estamos en cargar opcion de alojamiento")
        // Implementar fetch para cargar opciones de alojamiento
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5433/accommodation/PerDestination`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'idDestination' : selectedDestination
                }
            });
            const deleteOptions = await response.json();
            setDeleteOptions(deleteOptions);
            console.log(deleteOptions)
        } catch (error) {
            console.error('Error al cargar las opciones de transporte:', error);
        }
    }

    async function deleteAccommodationOption() {
        console.log("Estamos en eliminar opcion de alojamiento")
        // Implementar fetch para eliminar opción de alojamiento
        const selectedAccommodationOptionElement = document.getElementById('existing-accommodation-options') as HTMLInputElement;
        
        if (selectedAccommodationOptionElement) {
            console.log(parseInt(selectedAccommodationOptionElement.value));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/accommodation/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(parseInt(selectedAccommodationOptionElement.value))
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }

            loadAccommodationOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    //--------------------------------------                        Funciones para Comida
    async function createMealOption() {
        console.log("Estamos en crear opcion de comida")
        const mealTypeElement = document.getElementById('meal-type') as HTMLInputElement;
        const mealPriceElement = document.getElementById('meal-price') as HTMLInputElement;
        
        if (mealTypeElement && mealPriceElement) {
            const mealType = mealTypeElement.value;
            const mealPrice = mealPriceElement.value;

            console.log("Tipo de comida:", mealType);
            console.log("Precio de la comida:", mealPrice);

            // Implementar fetch para crear opción de comida
            
            const destination = {
                id: selectedDestination
            };
            const meal = {
                type: mealType,
                price: mealPrice,
                state: "A",
                destination:destination
            };
            
            console.log(JSON.stringify(meal));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/meal/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(meal)
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }
            // Una vez completada la solicitud, limpiar los inputs
            mealTypeElement.value = '';
            mealPriceElement.value = '';
            loadMealOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    async function loadMealOptions() {
        console.log("Estamos en cargar opcion de comida")
        // Implementar fetch para cargar opciones de comida
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5433/meal/PerDestination`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'idDestination' : selectedDestination
                }
            });
            const deleteOptions = await response.json();
            setDeleteOptions(deleteOptions);
            console.log(deleteOptions)
        } catch (error) {
            console.error('Error al cargar las opciones de transporte:', error);
        }
    }

    async function deleteMealOption() {
        console.log("Estamos en eliminar opcion de comida")
        const selectedMealOptionElement = document.getElementById('existing-meal-options') as HTMLInputElement;
        
        if (selectedMealOptionElement) {
            console.log(parseInt(selectedMealOptionElement.value));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/meal/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(parseInt(selectedMealOptionElement.value))
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }

            loadMealOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    //--------------------------------------                            Funciones para Seguro
    async function createTripInsuranceOption() {
        console.log("Estamos en crear opcion de seguro")
        const tripInsuranceTypeElement = document.getElementById('tripInsurance-type') as HTMLInputElement;
        const tripInsurancePriceElement = document.getElementById('tripInsurance-price') as HTMLInputElement;
        
        if (tripInsuranceTypeElement && tripInsurancePriceElement) {
            const tripInsuranceType = tripInsuranceTypeElement.value;
            const tripInsurancePrice = tripInsurancePriceElement.value;

            console.log("Tipo de seguro:", tripInsuranceType);
            console.log("Precio del seguro:", tripInsurancePrice);

            // Implementar fetch para crear opción de seguro        
            const destination = {
                id: selectedDestination
            };
            const tripInsurance = {
                type: tripInsuranceType,
                price: tripInsurancePrice,
                state: "A",
                destination:destination
            };
            
            console.log(JSON.stringify(tripInsurance));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/tripInsurance/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(tripInsurance)
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }
            // Una vez completada la solicitud, limpiar los inputs
            tripInsuranceTypeElement.value = '';
            tripInsurancePriceElement.value = '';
            loadTripInsuranceOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    async function loadTripInsuranceOptions() {
        console.log("Estamos en cargar opcion de seguro")
        // Implementar fetch para cargar opciones de seguro
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5433/tripInsurance/PerDestination`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'idDestination' : selectedDestination
                }
            });
            const deleteOptions = await response.json();
            setDeleteOptions(deleteOptions);
            console.log(deleteOptions)
        } catch (error) {
            console.error('Error al cargar las opciones de transporte:', error);
        }
    }

    async function deleteTripInsuranceOption() {
        console.log("Estamos en eliminar opcion de seguro")
        // Implementar fetch para eliminar opción de seguro
        
        const selectedTripInsuranceOptionElement = document.getElementById('existing-tripInsurance-options') as HTMLInputElement;
        
        if (selectedTripInsuranceOptionElement) {
            console.log(parseInt(selectedTripInsuranceOptionElement.value));

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/tripInsurance/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(parseInt(selectedTripInsuranceOptionElement.value))
                });
                console.log('Response', response);
              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }

            loadTripInsuranceOptions()
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    //--------------------------------------------- Destino
    async function getDEstinationById() {
        const destinationIdElement = document.getElementById('destination') as HTMLInputElement;
        if (destinationIdElement) {
            const destinationId = destinationIdElement.value;
            console.log("ID del destino seleccionado:", destinationId);
            idDestination=destinationId
            setSelectedDestination(destinationId);
        } else {
            console.error("No se pudo obtener el elemento del DOM");
        }
    }

    useEffect(() => {
        if (selectedCategory) {
            getDEstinationById()
            switch (selectedCategory) {
                case 'Transportes':
                    loadTransportationOptions();
                    break;
                case 'Alojamientos':
                    loadAccommodationOptions();
                    break;
                case 'Comidas':
                    loadMealOptions();
                    break;
                case 'Seguros de viaje':
                    loadTripInsuranceOptions();
                    break;
                default:
                    setOptions([]);
            }
        }
    }, [selectedCategory]);

    function renderCategoryFields() {
        switch (selectedCategory) {
            case 'Transportes':
                return (
                    <>
                        <h3>Agrega una opción a la categoria:</h3>
                        <div className="cont-addtrip">
                            <input className="txtbox-trip" placeholder="Ubicación del transporte" type="text"  id="transportation-name"/>
                            <input className="txtbox-trip" placeholder="Precio" type="double"  id="transportation-price"/>
                            <div className='right-left-side-trip'>
                                <div className="button-delete-trip">
                                    <a href="#" className="button-add-trip" onClick={createTransportationOption}>Add</a>
                                </div>
                            </div>
                        </div>
                        <h3>Elimina una opción existente:</h3>
                        <div className="cont-addtrip">
                            <select className="dropdown-addtrip" id="existing-transportation-options">
                                <option value="" disabled selected>Seleccione una opción existente</option>
                                {deleteOptions.map(deleteOptions => (
                                    <option key={deleteOptions.id} value={deleteOptions.id}>{deleteOptions.name}</option>
                                ))}
                            </select>
                            <div className="button-delete-trip">
                                <a href="#" className="button-trip" onClick={deleteTransportationOption}>Delete</a>
                            </div>
                        </div>
                    </>
                );
            case 'Alojamientos':
                return (
                    <>
                        <h3>Agrega una opción a la categoria:</h3>
                        <div className="cont-addtrip">
                            <input className="txtbox-trip" placeholder="Hotel" type="text" id="accommodation-lodging" />
                            <input className="txtbox-trip" placeholder="Tipo de habitación" type="text" id="accommodation-type" />
                            <input className="txtbox-trip" placeholder="Precio" type="double" id="accommodation-price" />
                            <div className='right-left-side-trip'>
                                <div className="button-delete-trip">
                                    <a href="#" className="button-add-trip" onClick={createAccommodationOption}>Add</a>
                                </div>
                            </div>
                        </div>
                        <h3>Elimina una opción existente:</h3>
                        <div className="cont-addtrip">
                            <select className="dropdown-addtrip" id="existing-accommodation-options">
                                <option value="" disabled selected>Seleccione una opción existente</option>
                                {deleteOptions.map(deleteOptions => (
                                    <option key={deleteOptions.id} value={deleteOptions.id}>{deleteOptions.name}</option>
                                ))}
                            </select>
                            <div className="button-delete-trip">
                                <a href="#" className="button-trip" onClick={deleteAccommodationOption}>Delete</a>
                            </div>
                        </div>
                    </>
                );
            case 'Comidas':
                return (
                    <>
                        <h3>Agrega una opción a la categoria:</h3>
                        <div className="cont-addtrip">
                            <input className="txtbox-trip" placeholder="Tipo de comida" type="text" id="meal-type" />
                            <input className="txtbox-trip" placeholder="Precio" type="double" id="meal-price" />
                            <div className='right-left-side-trip'>
                                <div className="button-delete-trip">
                                    <a href="#" className="button-add-trip" onClick={createMealOption}>Add</a>
                                </div>
                            </div>
                        </div>
                        <h3>Elimina una opción existente:</h3>
                        <div className="cont-addtrip">
                            <select className="dropdown-addtrip" id="existing-meal-options">
                                <option value="" disabled selected>Seleccione una opción existente</option>
                                {deleteOptions.map(deleteOptions => (
                                    <option key={deleteOptions.id} value={deleteOptions.id}>{deleteOptions.type}</option>
                                ))}
                            </select>
                            <div className="button-delete-trip">
                                <a href="#" className="button-trip" onClick={deleteMealOption}>Delete</a>
                            </div>
                        </div>
                    </>
                );
            case 'Seguros de viaje':
                return (
                    <>  
                        <h3>Agrega una opción a la categoria:</h3>
                        <div className="cont-addtrip">
                            <input className="txtbox-trip" placeholder="Tipo de seguro" type="text"  id="tripInsurance-type" />
                            <input className="txtbox-trip" placeholder="Precio" type="double"  id="tripInsurance-price"/>
                            <div className='right-left-side-trip'>
                                <div className="button-delete-trip">
                                    <a href="#" className="button-add-trip" onClick={createTripInsuranceOption}>Add</a>
                                </div>
                            </div>
                        </div>
                        <h3>Elimina una opción existente:</h3>
                        <div className="cont-addtrip">
                            <select className="dropdown-addtrip" id="existing-tripInsurance-options">
                                <option value="" disabled selected>Seleccione una opción existente</option>
                                {deleteOptions.map(deleteOptions => (
                                    <option key={deleteOptions.id} value={deleteOptions.id}>{deleteOptions.type}</option>
                                ))}
                            </select>
                            <div className="button-delete-trip">
                                <a href="#" className="button-trip" onClick={deleteTripInsuranceOption}>Delete</a>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <Layout>
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/cartagena.png" />
                <div className="addtrip-container">
                    <h4>Edita el Destino</h4>
                    <div className="cont-addtrip">
                        <div className='left-left-side-trip'>
                            <select
                                className="dropdown-addtrip"
                                id="destination"
                                value={selectedDestination}
                                onChange={(e) => setSelectedDestination(e.target.value)}
                            >
                                <option value="" disabled selected>Selecciona un Destino</option>
                                {listDestinations.map(destination => (
                                    <option key={destination.id} value={destination.id}>{destination.nameD}</option>
                                ))}
                            </select>
                        </div>
                        <div className='left-right-side-trip'>
                            <select
                                className="dropdown-addtrip"
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="" disabled selected>Seleciona una categoria</option>
                                <option value="Transportes">Transportes</option>
                                <option value="Alojamientos">Alojamientos</option>
                                <option value="Comidas">Comidas</option>
                                <option value="Seguros de viaje">Seguros de viaje</option>
                            </select>
                        </div>
                    </div>
                    {renderCategoryFields()}
                </div>
            </div>
        </Layout>
    );
}
