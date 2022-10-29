import React from 'react';
import { useState } from 'react';

const AddUsers = () => {

    const [user , setUser] = useState({})

    const handleAddUser = event =>{
        event.preventDefault()
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(Response => Response.json())
        .then(data => {
            if(data.acknowledged){
                alert('user add')
                event.target.reset('')
            }
        })


    }
    const handleInputBlur = event =>{
        const field = event.target.name
        const value = event.target.value
        const newUser = {...user}
        newUser[field] =value
        setUser(newUser)

    }
    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur}  type="text" name='name' placeholder='name' required/>
                <br />
                <input onBlur={handleInputBlur}  type="text" name='adress' placeholder='adress' required/>
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='email' required/>
                <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUsers;