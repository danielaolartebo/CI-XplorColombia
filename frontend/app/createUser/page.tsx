'use client';
import Link from 'next/link';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import Layout from '../../components/Layout';
import '../../styles/createDestination.css';



export default function createUserPage() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
    const { name, value, files } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataUser = {
          name: user.name,
          email: user.email,
          password: user.password,
          state: "A"
        };

        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5433/admin/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataUser)
          });
          const responseData = await response.json();
          window.location.reload();
        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <Layout>
                <div className="user-container" >
                    <div className="user-data-container">
                        <h4>Register User</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="cont-createtrip">
                                <div className='left-create'>
                                    <h5> Name</h5>
                                </div>
                                <div className='right-create'>
                                    <div className='right-right-side-create-trip'>
                                        <div className="col-create-textbox-container">
                                            <input className="txtbox-create" placeholder="" type="text" name="name" value={user.name} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-createtrip">
                                <div className='left-create'>
                                    <h5> Email</h5>
                                </div>
                                <div className='right-create'>
                                    <div className='right-right-side-create-trip'>
                                        <div className="col-create-textbox-container">
                                            <input className="txtbox-create" type="text"placeholder="@" name="email" value={user.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-createtrip">
                                <div className='left-create'>
                                    <h5> Password</h5>
                                </div>
                                <div className='right-create'>
                                    <div className='right-right-side-create-trip'>
                                        <div className="col-create-textbox-container">
                                            <input className="txtbox-create" type="text" name="password" value={user.password} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-createtrip">
                                <div className='left-create'>
                                </div>
                                <div className='right-create'>
                                    <div className='right-right-side-create-trip'>
                                        <ul className="create-cont-button">
                                            <li className="button-report1"><button type="submit" className="button">Create</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </Layout>
    );
}
