import Image from "next/image";

export default function Home() {
  return (
    <main className="title_container">

          {/* HEADER BEGINS */}
          <header className="main-header"> 
            <div className="container">
              <div className="nav-header">
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutus">About us</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#mostpopular">Most Popular</a></li>
                <li><a href="#contactus">Contact us</a></li>
                <button className="btn_btn_login"> Login/Register </button>
              </div>
            </div>
          </header>
          {/* HEADER ENDS */}

          {/* HOME PAGE STARTS */}
          <div className="banner" id="home"> 
              <img className="banner-img" src="../images/ima6.png" />
               <h1 className="title_style">Welcome to Xplor Colombia!</h1>
              <h2 className="description">Let's find your dream vacation</h2>
          </div>
          {/* HOME PAGE ENDS */}


          {/* ABOUT US PAGE STARTS */}
          <div className="aboutus-container">
            <div className="deals-subtitle" id="aboutus">
                  About us
            </div>
            <div className="text-container">
                <div className="text-aboutus">
                    Nos dedicamos apasionadamente a mostrar la belleza y diversidad de nuestro amado país a través de emocionantes tours y experiencias inolvidables. Nos enorgullece ser tu puerta de entrada al fascinante mundo del turismo en Colombia.<br/><br/>
                    Sumérgete en la magia de nuestra tierra mientras exploras destinos emblemáticos como Caño Cristales, el tesoro multicolor de la naturaleza que cautiva con sus aguas cristalinas y algas de colores vibrantes. Siente la adrenalina en el Parque del Café, donde la cultura del café cobra vida en un entorno de diversión y aprendizaje. Embárcate en una aventura única hacia las alturas del Nevado del Ruiz, donde serás testigo de la majestuosidad de los paisajes andinos y la vida silvestre que los habita. Admira el impresionante paisaje del Valle del Cocora, hogar de las icónicas palmas de cera, las más altas del mundo. Descubre la mágica Ciudad Perdida, una antigua maravilla arqueológica escondida en las selvas de la Sierra Nevada de Santa Marta. Explora las playas paradisíacas y la exuberante selva del Parque Tayrona, donde la naturaleza te recibe con brazos abiertos. Contempla la imponente Piedra del Peñol y maravíllate con las vistas panorámicas que ofrece desde su cima. Sumérgete en el desierto rojo y árido de la Tatacoa, un paisaje lunar que te dejará sin aliento con su belleza única.<br/><br/>
                    
                    En Xplor Colombia, nos comprometemos a proporcionarte experiencias auténticas, seguras y memorables que te permitirán descubrir la verdadera esencia de Colombia. Únete a nosotros y deja que tu aventura comience. ¡Explora Colombia con nosotros y crea recuerdos para toda la vida!
                    Únete a nosotros en esta emocionante aventura y déjanos mostrarte el verdadero corazón de Colombia.¡Tu viaje de ensueño comienza aquí con Xplor Colombia!
                </div>
            </div>
          </div>
           {/* ABOUT US PAGE ENDS */}


          {/* DEALS PAGE STARTS */}
          <div className="package-grid">
            <div className="deals-subtitle" id="deals">
                Check out our trip deals!
            </div>
            <div className="grid">
            {/* 1 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/cano.jpeg" />
                    <div className="button-container">
                      <button className="btn_btn"> Caño Cristales </button>
                    </div>
                      
              </div> 
              {/* 2 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/tayrona.jpg" />
                    <div className="button-container">
                      <button className="btn_btn"> Parque Tayrona </button>
                    </div>
                      
              </div> 
              {/* 3 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/ciudad-perdida.webp" />
                    <div className="button-container">
                      <button className="btn_btn"> Ciudad Perdida </button>
                    </div>
                      
              </div> 
              {/* 4 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/tatacoa.webp" />
                    <div className="button-container">
                      <button className="btn_btn"> Desierto de la Tatacoa </button>
                    </div>
                      
              </div> 
              {/* 5 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/cafe.webp" />
                    <div className="button-container">
                      <button className="btn_btn"> Parque del Café </button>
                    </div>
                      
              </div> 
              {/* 6 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/penol.jpeg" />
                    <div className="button-container">
                      <button className="btn_btn"> Piedra del Peñol </button>
                    </div>
                      
              </div> 
              {/* 7 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/nevado.jpeg" />
                    <div className="button-container">
                      <button className="btn_btn"> Nevado del Ruiz </button>
                    </div>
                      
              </div> 
              {/* 8 box */}
              <div className="grid-container">
                    <img className="grid-img" src="../images/cocora.jpeg" />
                    <div className="button-container">
                      <button className="btn_btn"> Valle del Cocora </button>
                    </div>
              </div> 
            </div>
            </div>
            {/* DEALS PAGE ENDS */}


    </main>
  );
}
