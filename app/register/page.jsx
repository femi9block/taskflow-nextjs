'use client';
import React, { useState  } from 'react';
import Card from '@/components/ui/Card';
import Styles from '@/app/register/register.module.css';

export default function RegisterPage () {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:"",
    });
    const {firstName, lastName, email, password, confirmPassword} = form;
    const [error, seterror] = useState("");
    const handleSubmitForm =  (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(item => item.email === email);
        if (existingUser) {
            alert("User already exists")
            return;
        }

        // Validation of password
        if(password !== confirmPassword) {
            alert("Password do not match")
            return;
        }
     
        const newUser = {
            id: Date.now(),
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
        };
        const updatedUser = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUser));
        
        alert("Registration successful");
        // reset the variable fields
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
     
        alert(error.message)
     
    }
    
    return(
        <Card>
            <h1>Registratio form</h1>
            <div className={Styles.registerForm}>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="firstName"> First Name</label>
                <input id='firstName' type="text" placeholder='Enter First Name' value={form.firstName} 
                onChange={(e) => setForm({...form, firstName:e.target.value})} />

                <label htmlFor="lastname">Last Name</label>
                <input id='lastName' type="text" placeholder='Enter last name here' value={form.lastName}
                onChange={(e) => setForm({...form, lastName:e.target.value})} />

                <label htmlFor="email">Email</label>
                <input id='email' type="email" placeholder='Enter email here' value={form.email}
                onChange={(e) => setForm({...form, email:e.target.value})} />

                <label htmlFor="password">Password</label>
                <input id='password' type="password" placeholder='Enter your password' value={form.password}
                onChange={(e) => setForm({...form, password:e.target.value})} />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id='confirmPassword' type="password" placeholder='Confirm your password' value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword:e.target.value})} />
            <button type='submit'>Register</button>
            </form>

            </div>
        </Card>


    );
}