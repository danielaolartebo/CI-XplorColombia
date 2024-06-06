'use client';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function SeeUsers() {
    useEffect(() => {
        showModifications();
    }, []);

    const [dataModification, setDataModification] = useState([]);

    async function showModifications(){
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5433/modification/getAll', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            const data = await response.json();
            console.log("Lista de modificaciones:", data);
            setDataModification(data);
          } catch (error) {
            console.error('Error al procesar la solicitud:', error);
          }
    }

    return (
        <Layout>
            <div className="user-list-container">
                <h2>Modificaciones</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Modificación</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataModification.map((modification) => (
                            <tr key={modification.id} className="user-item">
                                <td>{modification.id}</td>
                                <td>{modification.userAG.name}</td>
                                <td>{modification.modificationDate}</td>
                                <td>{modification.name}</td>
                                <td>{modification.modification}</td>
                                <td>{modification.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
