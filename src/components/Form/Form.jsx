import React from "react";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '' 
        });
    
    const [errors, setErrors] = useState({
        username: '',
        password: '' 
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

        const handleInputChange = (event) => {
            const property = event.target.name
            const value = event.target.value
            setUserData({...userData, [property]: value})   
            setErrors(validation({...userData, [property]: value}))         
        }

    return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' name='username' onChange={handleInputChange} value={userData.username} />
            {errors.username && <p>{errors.username}</p>}

            <label>Password</label>
            <input type='text' name='password' onChange={handleInputChange} value={userData.password} />
            {errors.password && <p>{errors.password}</p>}

            <button>LOGIN</button>
        </form>
    )
}

export default Form;