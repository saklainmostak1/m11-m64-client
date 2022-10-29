import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete  = user =>{
        const agree = window.confirm(`Are You Sure delete ${user.name}`)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
            .then(Response => Response.json())
            .then(data => {
                // console.log(data)
                if(data.deletedCount > 0){
                    alert('user delete')
                    const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
                    setDisplayUsers(remainingUsers)
                }
            })
        }

    }
    return (
        <div>
            <h2>Users: {displayUsers.length} </h2>
            <div>
                {
                    displayUsers.map(user => <p
                    key={user._id}
                    >
                        {user.name}
                        {user.email} <button
                         onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;