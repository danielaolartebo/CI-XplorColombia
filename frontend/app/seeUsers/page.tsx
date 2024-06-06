'use client';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function SeeUsers() {
    useEffect(() => {
        showUsers();
    }, []);

    const [dataUsers, setDataUsers] = useState([]);

    async function showUsers(){
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5433/admin/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          console.log("Lista de usuarios:", data);
          setDataUsers(data);
        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    }

    async function toggleUserStatus(userId, currentStatus) {
        console.log(currentStatus)
        console.log(userId)
        try {
            let newStatus;
            switch (currentStatus) {
            case 'A':
                newStatus = "D";
                break;
            case 'D':
                newStatus = "A";
                break;
            default:
                console.warn('Invalid current user state:', currentStatus);
                return;
            }
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5433/admin/users/${userId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: newStatus
            });
            if (response.ok) {
                const updatedUsers = dataUsers.map((user) =>
                    user.id === userId ? { ...user, newStatus } : user
                );
                setDataUsers(updatedUsers);
                showUsers();
            } else {
                console.error('Error al actualizar el estado del usuario');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
    }

    return (
        <Layout>
            <div className="user-list-container">
                <h2>Lista de Usuarios</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataUsers.map((user) => (
                            <tr key={user.id} className="user-item">
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role.name}</td>
                                <td>
                                    <button
                                        className={`user-action-btn ${
                                            user.state === 'A' ? 'deactivate-btn' : 'activate-btn'
                                        }`}
                                        onClick={() => toggleUserStatus(user.id, user.state)}
                                    >
                                        {user.state === 'A' ? 'Desactivar' : 'Activar'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
