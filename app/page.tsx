import Image from "next/image";

export default function Home() {
  return (
    <main className="title_container">

          <header className="main-header"> 
            <div className="container">
              <div className="nav-header">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Most Popular</a></li>
                <li><a href="#">Contact us</a></li>
              </div>
            </div>
            <div className="btn_container">
              <button className="btn_btn"> Login/Register </button>
            </div>
          </header>
      
          <div className="banner"> 
              <img className="banner-img" src="../images/ima3.jpg" />
               <h1 className="title_style">Welcome to Fly Global!</h1>
              <h2 className="description">Let's find your dream vacation</h2>
          </div>
    </main>
  );
}
