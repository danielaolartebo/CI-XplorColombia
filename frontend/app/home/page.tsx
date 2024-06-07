'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/navigation';
import {jsPDF} from 'jspdf';


export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    showDestinations();
    loadTripInfo();
    showPopularDestinations();
  }, []);
  
  const [data, setData] = useState([]);
  const [dataTrip, setDataTrip] = useState({
    nitCustomer: '',
    nameCustomer: '',
    emailCustomer: '',
    numPeople: 0,
    destinations: [], // Inicializar como arreglo vacío
    currentDestination: null
  });
  const[priceTrip,setPriceTrip]=useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [popularDestinations, setPopularDestinations] = useState([]);
  function loadTripInfo() {
    const tripInfo = localStorage.getItem('TRIP-INFO');
    if (tripInfo) {
      setDataTrip(JSON.parse(tripInfo));
      const tripInformation = JSON.parse(tripInfo);
  
      //console.log(tripInformation.destinations.length);
      // Obtener el elemento contenedor donde quieres agregar HTML
      const container = document.getElementById('destinations-container');
      if (container) {
        container.innerHTML = '';
        const newPrices = [];
        // HTML que deseas agregar
        for (let i = 0; i < tripInformation.destinations.length; i++) { // Cambiado a 8 iteraciones
          //console.log("El valor de i es: " + i);
          const currentDestination=tripInformation.destinations[i];
          //console.log(tripInformation.destinations[0]);
          const currentDestination2 = JSON.parse(currentDestination.idDestination)

          const nameD = currentDestination2.nameD;
          const basePrice = currentDestination2.basePrice;
          const numPeople = tripInformation.numPeople;
          const numDays = currentDestination.numDays;
          const accommodationPrice = currentDestination.accommodationOptions.price;
          const transportationPrice = currentDestination.transportationOptions.price;
          const mealPrice = currentDestination.mealOptions.price;
          const insurancePrice = currentDestination.tripInsuranceOptions.price;
          let bothTransportation;
          if(currentDestination.bothTransportation){
            bothTransportation = 2;
          }else{
            bothTransportation = 1;
          }

          const totalCost = basePrice + (numPeople *numDays* accommodationPrice) + (numPeople * transportationPrice) + (numPeople * numDays * mealPrice) + insurancePrice;
          newPrices.push(totalCost);
          const newHTML = ` 
            <div class="tarjeta">
              <button class="delete-button-destination" onclick="this.parentElement.remove()">X</button>
              <h3>${nameD}</h3>
              <p>Precio Base: $${basePrice}</p>
              <p>Número de Personas: ${numPeople}</p>
              <p>Número de Días: ${numDays}</p>
              <p>Costo de Alojamiento: $${accommodationPrice}</p>
              <p>Costo de Transporte: $${transportationPrice}</p>
              <p>Costo de Comida: $${mealPrice}</p>
              <p>Costo de Seguro: $${insurancePrice}</p>
              <h4>Total: $${totalCost}</h4>
            </div>      
          `;

          // Agregar el nuevo HTML al final del contenedor
          container.insertAdjacentHTML('beforeend', newHTML);
        }
        setPriceTrip(newPrices);
      }
    }
  }

  

  async function showPopularDestinations() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5433/trip/reservations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const listDestinations = await response.json();
      console.log("Lista de destinos:", listDestinations);
      
      // Calcular el total de reservas
      const totalReservations = listDestinations.reduce((total, destination) => total + destination.reservations, 0);
      
      // Calcular el porcentaje de reservas para cada destino
      const popularDestinationsWithPercentage = listDestinations.map(destination => ({
        id: destination.id,
        name: destination.name,
        percentage: (destination.reservations / totalReservations) * 100
      }));

      // Ordenar la lista de destinos populares por porcentaje (de mayor a menor)
      popularDestinationsWithPercentage.sort((a, b) => b.percentage - a.percentage);

      setPopularDestinations(popularDestinationsWithPercentage);
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  }
  

  async function showDestinations() {
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
      //console.log("Lista de destinos:", data);
      setData(data);
    } catch (error) {
      //console.error('Error al procesar la solicitud:', error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataTrip(prevTrip => ({
      ...prevTrip,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trip = {
      nitCustomer: dataTrip.nitCustomer,
      nameCustomer: dataTrip.nameCustomer,
      emailCustomer: dataTrip.emailCustomer,
      numPeople: dataTrip.numPeople,
      destinations: dataTrip.destinations,
      currentDestination: selectedDestination,
      state: "A"
    };

    // Guardar el objeto trip en el localStorage
    localStorage.setItem('TRIP-INFO', JSON.stringify(trip));
    console.log('New trip object created and saved in localStorage:', trip);


    // Redirigir a /destination
    router.push('/destination');
  };

  const totalPrice = priceTrip.reduce((total, price) => total + price, 0);
  
  const generarPDF1 = () => {
    const doc = new jsPDF();
  
    // Agregar el título y el total al documento PDF
    doc.text('Factura Viaje', 95, 20);
    
    // Recorrer el arreglo de precios y agregar cada precio al PDF
    priceTrip.forEach((price, index) => {
      doc.text(`Precio destino ${index + 1}: ${price}`, 10, 70 + (index * 10)); // Ajusta la posición vertical según el índice
    });
    
    
    // Calcular el total sumando todos los precios en el arreglo priceTrip
    const total = priceTrip.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    doc.text(`Total: ${total}`, 10, 50);
  
    // Guardar el documento PDF
    doc.save(`Factura_${1}.pdf`);
  };

  async function save(){
    const tripInfo = localStorage.getItem('TRIP-INFO');
    if (tripInfo) {
      setDataTrip(JSON.parse(tripInfo));
      const tripInformation = JSON.parse(tripInfo);

      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5433/trip/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(tripInformation)
        });
        const responseData = await response.text();
        console.log("Respuesta del servidor:", responseData);
        if (responseData === "Guardado Correctamente") {
            alert("Guardado Correctamente");
            localStorage.removeItem('TRIP-INFO');
            location.reload();
        } else {
            console.error("El servidor indicó un error:", responseData);
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
    }

        for (let i = 0; i < tripInformation.destinations.length; i++) {
          const currentDestination=tripInformation.destinations[i];
        }
      }
    }
  
  

  return (
    <Layout>
      {/* HOME PAGE STARTS */}
      <div className="banner" id="home">
        <img className="banner-img" src="../images/ima6.png" />
        <h1 className="title_style">Bienvenido a Xplor Colombia!</h1>
        <h2 className="description">Busquemos las vacaciones de tus sueños</h2>
      </div>
      {/* HOME PAGE ENDS */}

      {/* CREATE TRIP PAGE STARTS */}
      <div id="createTrip">-</div>
      <div className="aboutus-container">
        <div className="container-centered">
          <div className="deals-subtitle">
            Create trip
          </div>
          <form onSubmit={handleSubmit}>
            <div className="items-container">
              <div className="text-aboutus">
                {/* ---------------------- NIT AND USER NAME ----------------------------*/}
                <div className="cont-subtitle">
                  <div className="text-items">
                    <div className="text-design">Client information</div>
                  </div>
                  <div className="items-half1">
                    <input
                      className="form-items1"
                      placeholder="NIT"
                      type="text"
                      name="nitCustomer" // Cambiar a "nitCustomer"
                      value={dataTrip.nitCustomer}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="items-half2">
                    <input
                      className="form-items2"
                      placeholder="Full Name"
                      type="text"
                      name="nameCustomer" // Cambiar a "nameCustomer"
                      value={dataTrip.nameCustomer}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="items-half2">
                    <input
                      className="form-items2"
                      placeholder="Email"
                      type="email"
                      name="emailCustomer" // Cambiar a "emailCustomer"
                      value={dataTrip.emailCustomer}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* ---------------------- NUMBER OF PEOPLE ----------------------------*/}
                <div className="cont-subtitle">
                  <div className="items-half1">
                    <div className="text-items">
                      <div className="text-design">Number of people</div>
                    </div>
                  </div>
                  <div className="items-half2">
                    <div className="right-create">
                      <div className="right-right-side-create-trip">
                        <div className="col-create-textbox-container">
                          <input
                            className="txtbox-create"
                            placeholder="0"
                            type="text"
                            name="numPeople"
                            value={dataTrip.numPeople}
                            onChange={handleChange} // Asegurarse de agregar onChange aquí también
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------------------- DESTINATIONS ----------------------------*/}
                <div className="destinations-container" id="destinations-container"></div>
                <div className="cont-subtitle">
                  <div className="items-half1">
                    <div className="text-items">
                      <div className="text-design">Selecciona el siguiente destino</div>
                    </div>
                  </div>
                  <div className="items-half2">
                    <select
                      className="dropdown-addtrip"
                      id="destination"
                      name="destination"
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                    >
                      <option value="" disabled selected>Destinos</option>
                      {data.map(destination => (
                        <option key={destination.id} value={JSON.stringify(destination)}>
                          {destination.nameD + " - $" + destination.basePrice}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* ---------------------- ADD BUTTON ----------------------------*/}
                <div className="cont-subtitle">
                  <div className="items-half1"></div>
                  <div className="items-half2">
                    <li className="button-report1">
                      <button  type="submit" className="button">Add</button>
                    </li>
                    <li className="button-report1">
                      <button  type="button" className="button" onClick={save}>Save</button>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* CREATE TRIP PAGE ENDS */}

      {/* PRINCING STARTS */}
      <section>
        <div className="cont-pricing2">
          <div className="title-price" style={{ textAlign: 'center' }}>Princing & Details</div>
          <div className="columns">
            <ul className="price">
              <li className="header">Trip Prices</li>
              {priceTrip.map((price, index) => (
                <li key={index} className="grey">$ {price} COP</li>
              ))}
              <li className="header">Total</li>
              <li className="grey">$ {totalPrice} COP</li>
            </ul>
          </div>
          <ul className="price2">
            <li><a href="#" className="button" onClick={generarPDF1}>Download</a></li>
          </ul>
        </div>
      </section>

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
                <button className="btn_btn"> Deal Nature </button>
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
      {/* Iterar sobre la lista de destinos populares y mostrar barras de progreso */}
      {popularDestinations.map(destination => (
        <div key={destination.id} className="w3-container w3-blue w3-round-xlarge" style={{ width: `${destination.percentage}%` }}>{destination.id}</div>
      ))}
    </div>
  </div>
</div>
{/* MOST POPULAR PAGE ENDS */}

    </Layout>
  );
}
