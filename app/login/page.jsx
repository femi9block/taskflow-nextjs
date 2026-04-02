'use client'
import React, { useState }  from 'react';
export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="p-6">
        <h1 className="text-2xl font-bold">Login Page</h1>
        <input type="text" placeholder='Enter First Name' value={firstName} 
        onChange={(e) => setFirstName(e.target.value) }/>
        <input type="password" placeholder='Enter password' value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
    )
}