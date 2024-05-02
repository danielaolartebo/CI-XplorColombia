import { togglePasswordVisibility } from './index';
import Link from 'next/link'

export default function Home() {
  
  return (
      <main className="title_container">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

          {/* LOGIN PAGE STARTS */}
          <div className="login-first-container" id="home"> 
            <img className="login-banner-img" src="../images/mar.jpeg" />
            <div className="login-container">
              <h4>Login to your account</h4>
              <div className="form-row">
                <div className="col-login">
                  <input className="form-control" placeholder="Email Address" type="text" name="email" required/>
                </div>
                <div className="col-login">
                  <input className="form-control" placeholder="Password" type="password" name="password" id="passwordInput" required/>
                  <span className="toggle-password" /* onClick={togglePasswordVisibility} */ >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm1-5h-2v-1h2v1z"/>
                    </svg>
                  </span>
                </div>
                <Link href='/welcome'>
                  <div className="login-button-contact">
                    <button type="submit" className="login-btn-theme">Login</button>
                  </div>
                </Link>
                <h6><a href="/resetPassword" style={{color: 'lightblue'}}> Forgot password? </a></h6>
              </div>
            </div>
          </div>
          {/* LOGIN PAGE ENDS */}
      </main>

  )
}