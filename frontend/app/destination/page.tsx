'use client';

import Link from "next/link"
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import { useRouter } from 'next/navigation';

export default function Destination() {
  const router = useRouter();
    useEffect(() => {
      loadTripInfo();
      loadImageUrl();
    }, []);

    const [destination, setDestination] = useState([]);
    const [dataTrip, setDataTrip] = useState({
        nitCustomer: '',
        nameCustomer: '',
        emailCustomer: '',
        numPeople: 0,
        destinations: [], // Inicializar como arreglo vacío
        currentDestination: null
      });
    const [transportationOptions, setTransportationOptions] = useState([]);
    const [accommodationOptions, setAccommodationOptions] = useState([]);
    const [mealOptions, setMealOptions] = useState([]);
    const [tripInsuranceOptions, setTripInsuranceOptions] = useState([]);

    const [destinationImageUrl, setDestinationImageUrl] = useState('');

    const [roundtrip, setRoundtrip] = useState(false);

    async function loadTripInfo() {
        const tripInfo = localStorage.getItem('TRIP-INFO');
        if (tripInfo) {
            const parsedTripInfo = JSON.parse(tripInfo);
            console.log("Parsed Trip Info:", parsedTripInfo);
            setDataTrip(parsedTripInfo);
            console.log("Parsed Trip Info:", parsedTripInfo.currentDestination);
            const destinationData = JSON.parse(parsedTripInfo.currentDestination)

            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5433/destination/get', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'id': destinationData.id
                  }
                });
                const data = await response.json();
                console.log("Destino:", data);
                setDestination(data);

                loadTransportationOptions();
                loadAccommodationOptions();
                loadMealOptions();
                loadTripInsuranceOptions();

              } catch (error) {
                console.error('Error al procesar la solicitud:', error);
              }
        }
    }

    async function loadImageUrl() {
        try {
            const tripInfo = localStorage.getItem('TRIP-INFO');
            if(tripInfo){
                const parsedTripInfo = JSON.parse(tripInfo);
                const destinationData = JSON.parse(parsedTripInfo.currentDestination)
                const storageRef = ref(storage, `Destinations/${destinationData.id}`);
                const imageUrl = await getDownloadURL(storageRef);
                setDestinationImageUrl(imageUrl);
            }
        } catch (error) {
            console.error('Error al obtener la URL de descarga de la imagen:', error);
        }
    }

    async function loadTransportationOptions() {
        const tripInfo = localStorage.getItem('TRIP-INFO');
        if(tripInfo){
            const parsedTripInfo = JSON.parse(tripInfo);
            const destinationData = JSON.parse(parsedTripInfo.currentDestination)
            // Implementar fetch para cargar opciones de transporte
            console.log("Estamos en cargar opcion de transporte")
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:5433/transportation/PerDestination`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'idDestination':destinationData.id
                    }
                });
                const options = await response.json();
                setTransportationOptions(options);
            } catch (error) {
                console.error('Error al cargar las opciones de transporte:', error);
            }
        }
    }

    async function loadAccommodationOptions() {
        const tripInfo = localStorage.getItem('TRIP-INFO');
        if(tripInfo){
                const parsedTripInfo = JSON.parse(tripInfo);
                const destinationData = JSON.parse(parsedTripInfo.currentDestination)
            console.log("Estamos en cargar opcion de alojamiento")
            // Implementar fetch para cargar opciones de alojamiento
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:5433/accommodation/PerDestination`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'idDestination' : destinationData.id
                    }
                });
                const options = await response.json();
                setAccommodationOptions(options);
            } catch (error) {
                console.error('Error al cargar las opciones de alojamiento:', error);
            }
        }
    }

    async function loadMealOptions() {
        const tripInfo = localStorage.getItem('TRIP-INFO');
        if(tripInfo){
            const parsedTripInfo = JSON.parse(tripInfo);
            const destinationData = JSON.parse(parsedTripInfo.currentDestination)
            console.log("Estamos en cargar opcion de comida")
            // Implementar fetch para cargar opciones de comida
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:5433/meal/PerDestination`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'idDestination' : destinationData.id
                    }
                });
                const options = await response.json();
                setMealOptions(options);
            } catch (error) {
                console.error('Error al cargar las opciones de comida:', error);
            }
        }
    }

    async function loadTripInsuranceOptions() {
        const tripInfo = localStorage.getItem('TRIP-INFO');
        if(tripInfo){
            const parsedTripInfo = JSON.parse(tripInfo);
            const destinationData = JSON.parse(parsedTripInfo.currentDestination)
            console.log("Estamos en cargar opcion de seguro")
            // Implementar fetch para cargar opciones de seguro
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:5433/tripInsurance/PerDestination`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'idDestination' : destinationData.id
                    }
                });
                const options = await response.json();
                setTripInsuranceOptions(options);
            } catch (error) {
                console.error('Error al cargar las opciones de seguro:', error);
            }
        }
    }

    function addDestinationToTrip(){
        const tripInformation = localStorage.getItem('TRIP-INFO');
        if (tripInformation) {
            const tripInfo = JSON.parse(tripInformation);
            
            const startDateElement = document.getElementById('start-date') as HTMLInputElement;
            const endDateElement = document.getElementById('end-date') as HTMLInputElement;
            const transportationOptionsElement = document.getElementById('existing-transportation-options') as HTMLInputElement;
            const accommodationOptionsElement = document.getElementById('existing-accommodation-options') as HTMLInputElement;
            const mealOptionsElement = document.getElementById('existing-meal-options') as HTMLInputElement;
            const tripInsuranceOptionsElement = document.getElementById('existing-tripInsurance-options') as HTMLInputElement;

            if (startDateElement && endDateElement && transportationOptionsElement && accommodationOptionsElement&& mealOptionsElement && tripInsuranceOptionsElement) {
                const startDate = startDateElement.value;
                const endDate = endDateElement.value;
                const bothTransportation = roundtrip;
                const transportationOptions = transportationOptionsElement.value;
                const accommodationOptions = accommodationOptionsElement.value;
                const mealOptions = mealOptionsElement.value;
                const tripInsuranceOptions = tripInsuranceOptionsElement.value;

                const startDateT = new Date(startDateElement.value);
                const endDateT = new Date(endDateElement.value);

                // Calcula la diferencia en milisegundos
                const differenceInMs = endDateT - startDateT;

                // Calcula la diferencia en días dividiendo la diferencia en milisegundos entre el número de milisegundos en un día
                const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

                console.log("La diferencia en días es:", differenceInDays);

                const transportation=JSON.parse(transportationOptions)
                const accommodation=JSON.parse(accommodationOptions)
                const meal=JSON.parse(mealOptions)
                const tripInsurance=JSON.parse(tripInsuranceOptions)

                
                const newDestination = {
                    idDestination: tripInfo.currentDestination,
                    startDate: startDate,
                    endDate: endDate,
                    numDays:differenceInDays,
                    bothTransportation: bothTransportation,
                    transportationOptions: transportation,
                    accommodationOptions: accommodation,
                    mealOptions: meal,
                    tripInsuranceOptions: tripInsurance
                };

                console.log("newDestination: "+JSON.stringify(newDestination));

                //Agregar el nuevo destino a la lista de destinos
                tripInfo.destinations.push(newDestination);

                // Actualizar el objeto TRIP-INFO en el localStorage
                localStorage.setItem('TRIP-INFO', JSON.stringify(tripInfo));

                console.log('Destino agregado correctamente:', newDestination);

                router.push('/home#createTrip');
            }
        } else {
            console.error('El objeto TRIP-INFO no existe en el localStorage.');
        }

    }
   
  return (
    <Layout>
      <section id="gtco-welcome" className="bg-white section-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-7 py-5 pl-md-0 pl-4">
                                <div className="heading-section pl-lg-5 ml-md-5">
                                    <h2>
                                        <br></br><br></br>
                                        {destination.name}
                                    </h2>
                                </div>
                                <div className="pl-lg-5 ml-md-5">
                                    <p>{destination.description}</p>
                                    <div className="row">
                                        <div className="trips-container">
                                          <div className="half-trips-container">
                                                 <a href="#" className="thumb-menu">
                                                    {/* Mostrar la imagen del destino */}
                                                    <img className="img-fluid img-cover" src={destinationImageUrl} alt="Destination" />
                                                </a>
                                          </div>
                                          <div className="half-trips-container">
                                            <div className="cont-title">
                                                  <div className="sub-title"> Create plan: </div>                                           
                                            </div>

                                             {/* ---------------------- # DAYS STARTS ----------------------------*/}


                                             <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-plus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Start of trip </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="start-date" name="start-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-calendar-minus-o" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> End of trip </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <div className="date-range-container">
                                                    <input type="date" id="end-date" name="end-date"></input>
                                                    </div>
                                                </div>
                                            </div>

                                             {/* ---------------------- # DAYS ENDS ----------------------------*/}

                                            {/* ---------------------- TRANSPORTATION STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-bus" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Transportation</p>
                                                    <input
                                                        type="checkbox"
                                                        id="roundtrip-checkbox"
                                                        name="roundtrip"
                                                        checked={roundtrip} // Estado controlado por roundtrip
                                                        onChange={() => setRoundtrip(!roundtrip)} // Alternar el valor de roundtrip al cambiar la casilla de verificación
                                                    />
                                                    <label htmlFor="roundtrip-checkbox">Ida y regreso</label>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="existing-transportation-options">
                                                        <option value="" disabled selected>Seleccione una opción</option>
                                                        {transportationOptions.map(transportationOption => (
                                                            <option key={transportationOption.id} value={JSON.stringify(transportationOption)}>
                                                                {transportationOption.name} - ${transportationOption.price}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            {/* ---------------------- TRANSPORTATION ENDS ----------------------------*/}

                                             {/* ---------------------- HOTEL STARTS ----------------------------*/}

                                             <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-building" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Hotel </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="existing-accommodation-options">
                                                        <option value="" disabled selected>Seleccione una opción </option>
                                                        {accommodationOptions.map(accommodationOptions => (
                                                            <option key={accommodationOptions.id} value={JSON.stringify(accommodationOptions)}>{accommodationOptions.name} - ${accommodationOptions.price}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* ---------------------- HOTEL ENDS ----------------------------*/}

                                            {/* ---------------------- FOOD STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-cutlery" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Meals </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                     <select className="dropdown-menu" id="existing-meal-options">
                                                        <option value="" disabled selected>Seleccione una opción </option>
                                                        {mealOptions.map(mealOptions => (
                                                            <option key={mealOptions.id} value={JSON.stringify(mealOptions)}>{mealOptions.type} - ${mealOptions.price}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* ---------------------- FOOD ENDS ----------------------------*/}

                                            {/* ---------------------- TRIP INSURANCE STARTS ----------------------------*/}

                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    <i className="fa fa-ambulance" style={{ fontSize: '36px'}}></i>
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                    <p> Trip Insurance </p>
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                    <select className="dropdown-menu" id="existing-tripInsurance-options">
                                                        <option value="" disabled selected>Seleccione una opción </option>
                                                        {tripInsuranceOptions.map(tripInsuranceOptions => (
                                                            <option key={tripInsuranceOptions.id} value={JSON.stringify(tripInsuranceOptions)}>{tripInsuranceOptions.type} - ${tripInsuranceOptions.price}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* ---------------------- HEALTH INSURANCE ENDS ----------------------------*/}
                                            {/* ---------------------- BUTTON ADD STARTS ----------------------------*/}
                                            <div className="cont-subtitle">
                                                <div className="half-descrip-container left-right-side">
                                                    
                                                </div>
                                                <div className="half-descrip-container right-right-side">
                                                   
                                                </div>
                                                <div className="half-descrip-container right-left-side">
                                                <ul className="trips-button">
                                                    <li><button className="button-trips" onClick={addDestinationToTrip}>Add</button></li>
                                                </ul>

                                                </div>
                                            </div>
                                            {/* ---------------------- BUTTON ADD ENDS ----------------------------*/}
                                          </div>
                                        </div>    
                                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
  );
}
