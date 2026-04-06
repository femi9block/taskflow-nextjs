'use client'
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import Button from '@/components/button/Button'
import Card from '../ui/Card';





export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState('');
    useEffect (() => {
    const storedUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!storedUser) {
        router.push('/login')
    } else {
        setUser(storedUser);
    }
    }, []

    );

    const handleSubmit = () => {
      localStorage.removeItem('currentUser')
      router.push('/login')
    }

    if (!user) {
        return <p>Loading...</p>
    }
    
    return(
        <Card className='p-6 max-w-md mx-auto' >
            <div className='navContainer'>
            <h2>TaskFlow Dashboard</h2>
            <p>Welcome {user?.firstName || 'Guest'}</p>
            {/* Avarta */}
            <span className="w-9 h-9 bg-indigo-100 text-indigo-600 
            rounded-full flex items-center justify-center font-semibold">
            {user.firstName.charAt(0) || 'G'}
            </span>

            <button onClick={handleSubmit}>Sign Out</button>

            </div>
        </Card>
    )
}