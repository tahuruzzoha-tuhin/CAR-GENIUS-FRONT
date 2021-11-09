import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://car-genius.herokuapp.com/services/")
            .then(res => res.json())
            .then(a => setServices(a))
    }, [])

    const handleDelete = (id) => {
        const url = `https://car-genius.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div>
            <h1>Magagagagagagagagagag</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;