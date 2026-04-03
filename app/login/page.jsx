'use client'
import React, { useState }  from 'react';
import Style from '@/app/login/login.module.css';
import Card from '@/components/ui/Card';
import {loginUser} from "@/services/authServices";
export default function LoginPage() {
    const [form, setForm] = useState({
        email : "",
        password : "",
    });

    const {email, password } = form;
    const [error, setError] = useState('');

    const handleSubmitForm = (e) => {
      e.preventDefault();
      // Get the users
      const res = loginUser({email, password});
      if (!res.success) {
        setError(res.message);
        return;
      }
      
    // Reset Inputs
    setForm({
        email: "",
        password: "",
    }); 

    // Redirect to dashboard
    Router.push('/dashboard');
    }
    

    return(
        <Card className="p-6 flex-col justify-center">
        <h1 className="text-2xl font-bold">Login Page</h1>
            <div className={Style.loginContainer}>
                <form onSubmit={handleSubmitForm}>

        <label htmlFor="email">Email</label> <br />
        <input type="email" placeholder='Enter email' value={email} 
        onChange={(e) => setForm({...form, email: e.target.value}) }/> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" placeholder='Enter password' value={password}
        onChange={(e) => setForm({password: e.target.value})}/> <br />
        <button className={Style.button} type='subit'>Login</button>
                </form>
            </div>
      </Card>
    )
}