'use client'
import React, { useState } from 'react';
import Style from "@/app/register/register.module.css";
import Card from "@/components/ui/Card";
export default function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
   const foundUsers = existingUsers.find((user) => user.email === email );
   if (foundUsers) {
    alert("User found")
    return
   };
   const newUser = {
    id : Date.now(),
    firstName,
    lastName,
    email,
    password
   };

   const updatedUser = [
    ...existingUsers, newUser
   ]

   localStorage.setItem("users", JSON.stringify(updatedUser));

   setFirstName('');
   setLastName('');
   setEmail('');
   setPassword('');
      
    return(
        <Card className="max-w-lg mx-auto">
            <form action="submit-form" onSubmit={handleSubmitForm}>

            <p className="text-2xl font-bold">Register Page</p>
            <div className={Style.registerForm}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder='Enter First Name' value={firstName} 
            onChange={((e) =>setFirstName(e.target.value))} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder='Enter Last Name'value={lastName} 
            onChange={((e) => setLastName(e.target.value))}/>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Enter email (john@example.com)'value={email} 
            onChange={((e) => setEmail(e.target.value))}/>
            <label htmlFor="password">Password</label>
            <input type="text" minLength={8} placeholder='Enter password i.e. Ghe67#@!' value={password} 
            onChange={((e) => setPassword(e.target.value))}/>
                
            </div>
      <button type='submit'>Register New User</button>
            </form>

    </Card>
    )

}

