'use client';

import { useState } from 'react';
import { togglePasswordVisibility } from './index';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    const data = {
      username: email,//Pero es el email
      password: password
    };
    console.log(email)
    console.log(password)
    try {
      const response = await fetch('http://localhost:5433/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        // Manejar la respuesta del servidor aquí, por ejemplo, redireccionar al usuario a otra página
        console.log(responseData);
        if (responseData.token) {
          localStorage.setItem('token', responseData.token);
          console.log('Token stored in local storage');
      }
        // Redireccionar al usuario a la página de bienvenida
        window.location.href = '/home';
      } else {
        // Manejar errores de la solicitud
        console.error('Error al iniciar sesión:', response.statusText);
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al procesar la solicitud:', error);
    }
  };

  return (
    <main className="title_container">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

      {/* LOGIN PAGE STARTS */}
      <div className="login-first-container" id="home"> 
        <img className="login-banner-img" src="../images/mar.jpeg" />
        <div className="login-container">
          <h4>Ingresa tus datos</h4>
          <div className="form-row">
            <div className="col-login">
              <input className="form-control" placeholder="Ingresa tu correo" type="text" name="email" value={email} onChange={handleChangeEmail} required/>
            </div>
            <div className="col-login">
              <input className="form-control" placeholder="Contraseña" type="password" name="password" id="passwordInput" value={password} onChange={handleChangePassword} required/>
              <span className="toggle-password" /* onClick={togglePasswordVisibility} */ >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm1-5h-2v-1h2v1z"/>
                </svg>
              </span>
            </div>
            <div className="login-button-contact" onClick={handleClick}>
              <button type="button" className="login-btn-theme">Ingresar</button>
            </div>
            <h6><a href="/resetPassword" style={{color: 'lightblue'}}> Olvidaste tu contraseña? </a></h6>
          </div>
        </div>
      </div>
      {/* LOGIN PAGE ENDS */}
    </main>
  )
}
