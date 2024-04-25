import Link from "next/link"

export default function Register() {
    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

        {/* RESET PASSWORD PAGE STARTS */}
          <div className="login-first-container" id="home"> 
            <img className="login-banner-img" src="../images/mar.jpeg" />
            <div className="login-container">
              <h4>Reset password</h4>
              <div className="form-row">
                <div className="col-login">
                  <input className="form-control" placeholder="Email Address" type="text" name="email" required/>
                </div>
                <Link href='/'>
                  <div className="login-button-contact">
                    <button type="submit" className="login-btn-theme">Send code</button><br></br><br></br>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        {/* RESET PASSWORD PAGE ENDS */}
        </main>

    )
}