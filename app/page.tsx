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
                      <div className="col-login"><input className="form-control" placeholder=" Email Address" type="text" name="email" required/> </div>
                      <div className="col-login"><input className="form-control" placeholder=" Password" type="text" name="password" required/></div>
                      <Link href='/welcome'><div className="login-button-contact"><button type="submit" className="login-btn-theme">Login</button></div></Link>
                      <h6>Not registered yet? <a href="/register" style={{color: 'lightblue'}}> Create an account! </a></h6>
                </div>
              </div>
          </div>
          {/* LOGIN PAGE ENDS */}
      </main>

  )
}
