import Link from 'next/link';
import Layout from '../../components/Layout';

export default function DeleteTripPage() {

    return (
        <Layout>
            {/* CREATE TRIP STARTS */}
            <div className="login-first-container" id="home">
                <img className="login-banner-img" src="../images/ruiz.jpeg" />
                <div className="createtrip-container">
                    <h4>Delete a Trip</h4>

                    {/* NAME STARTS */}
                    <div className="cont-createtrip">
                      <div className='left-create'>
                          <h5> Name</h5>
                      </div>
                      <div className='right-create'>
                            <div className='right-right-side-delete-trip'>
                                <select className="dropdown-deletetrip" id="menu"> 
                                    <option value="" disabled selected> Select trip</option>
                                    <option value=""> Caño Cristales </option> 
                                    <option value=""> Parque Tayrona </option> 
                                    <option value=""> Ciudad Perdida </option> 
                                    <option value=""> Desierto de la Tatacoa </option> 
                                    <option value=""> Parque del Café </option> 
                                    <option value=""> Piedra del Peñol </option> 
                                    <option value=""> Nevado del Ruiz </option> 
                                    <option value=""> Valle del Cocora </option> 
                            </select>
                            </div>
                      </div>
                    </div>
                    {/* NAME ENDS */}

                    <div className="cont-createtrip">
                      <div className='left-create'>
                      </div>
                      <div className='right-create'>
                        <div className='right-right-side-delete-trip'>
                            <ul className="create-cont-button">
                                <li className="button-report1"><a href="#" className="button">Delete</a></li>
                            </ul>
                        </div>                    
                    </div>
                    </div>
                    
                    {/* CREATE TRIP ENDS */}
                    <div className='cont-table'>
                    </div>
                </div>
            </div>

            {/* Utiliza el componente AddTrip */}
        </Layout>
    );
}