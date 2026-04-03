'use client'

export function registerUser (data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === data.email);
    if (existingUser) {
        return{
            success: false, message: "Email already exists"
        };
    };
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    return {
        success: true, message: "Registration successful"
    }

};

export function loginUser(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === data.email && user.password === data.password);
    if (!user) {
        return{success: false, message: "Incorrect email/pasword"}
    };
    // Save Session
    localStorage.setItem("Current User", JSON.stringify(user));
    return{
        message: "Login successful", user
    }   
};