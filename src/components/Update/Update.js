import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData()
    
    const [user , setUser] = useState(storedUser)

    const handleUpdateUser = event =>{
        event.preventDefault()
        console.log(user)
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(Response => Response.json())
        .then(data =>{ 
            if(data.modifiedCount > 0){
                alert('user updated')
            }
            

        })

    }
    const handleInputChange = event =>{
        const field = event.target.name
        const value = event.target.value
        const newUser = {...user}
        newUser[field] =value
        setUser(newUser)

    }
    return (
        <div>
            <h2>Please Update: {storedUser.name} </h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name}  type="text" name='name' placeholder='name' required/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.adress} type="text" name='adress' placeholder='adress' required/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name="email" id="" placeholder='email' required/>
                <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default Update;