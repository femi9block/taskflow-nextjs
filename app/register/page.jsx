'use client';
import React, { useState  } from 'react';
import Card from '@/components/ui/Card';
import Styles from '@/app/register/register.module.css';
import {registerUser} from '@/services/authServices';

export default function RegisterPage () {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:"",
    });
    const {firstName, lastName, email, password, confirmPassword} = form;
    const [error, setError] = useState("");
    const handleSubmitForm =  (e) => {
        e.preventDefault();

        // Validation of password
        if(password !== confirmPassword) {
            setError("Password do not match");
            return;
        }

    // Call service 
        const res = registerUser ({
            id: Date.now(),
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            email: email.toLowerCase(),
            password: password,
        });
        if (!res.success) {
            setError(res.message);
            return;
        };
        // Success
        setError("");
        alert(res.message);
   
        // reset the variable fields
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
     
        // show error
        {error && (
            <p className='text-red-500'>{error}</p>
        )}
     
    };
    
    return(
        <Card className='p-6 max-w-md mx-auto'>
            <h1 className='text-xl font-bold mb-4 text-center'>Registratio form</h1>
            <div className={Styles.registerForm}>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="firstName"> First Name</label>
                <input id='firstName' type="text" placeholder='Enter First Name' value={firstName} 
                onChange={(e) => setForm({...form, firstName:e.target.value})} />

                <label htmlFor="lastname">Last Name</label>
                <input id='lastName' type="text" placeholder='Enter last name here' value={lastName}
                onChange={(e) => setForm({...form, lastName:e.target.value})} />

                <label htmlFor="email">Email</label>
                <input id='email' type="email" placeholder='Enter email here' value={email}
                onChange={(e) => setForm({...form, email:e.target.value})} />

                <label htmlFor="password">Password</label>
                <input id='password' type="password" placeholder='Enter your password' value={password}
                onChange={(e) => setForm({...form, password:e.target.value})} />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id='confirmPassword' type="password" placeholder='Confirm your password' value={confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword:e.target.value})} />
            <button type='submit'>Register</button>
            </form>

            </div>
        </Card>


    );
}