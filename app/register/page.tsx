export default function Register() {
    return (
        <main className="title_container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

            {/* HEADER BEGINS */}
            <header className="main-header"> 
                <div className="container">
                <div className="nav-header">
                    <li><a href="/" className="white-link">Home</a></li>
                    <li><a href="/" className="white-link">About us</a></li>
                    <li><a href="/" className="white-link">Deals</a></li>
                    <li><a href="/" className="white-link">Most Popular</a></li>
                    <li><a href="/" className="white-link">Contact us</a></li>
                </div>
                </div>
            </header>
            {/* HEADER ENDS */}

            {/* REGISTER PAGE STARTS */}
            <div className="login-first-container" id="home"> 
                <img className="login-banner-img" src="../images/ima4.jpeg" />
                <div className="register-container">
                <div className="register-title"><h4>Create account</h4></div>
                    <div className="flex-container">
                            <div className="register-left-half-container">
                                <div className="col-register">Name</div>
                                <div className="col-register">Last name</div>
                                <div className="col-register">Email</div>
                                <div className="col-register">Phone</div>
                            </div>
                            <div className="register-right-half-container">
                                <div className="col2-register"><input className="form-control-register" type="text" name="name" required/> </div>
                                <div className="col2-register"><input className="form-control-register" type="text" name="last_name" required/></div>
                                <div className="col2-register"><input className="form-control-register" type="email" name="email" required/></div>
                                <div className="col2-register"><input className="form-control-register" type="phone" name="phone" required/></div>
                                <div className="register-button-contact"><button type="submit" className="register-btn-theme">Sign up</button></div>
                                <h6>Have an account already? <a href="/login" style={{color: 'lightblue'}}> Sign in! </a></h6>
                            </div>
                    </div>
                </div>
                </div>
            {/* REGISTER PAGE ENDS */}
        </main>

    )
}