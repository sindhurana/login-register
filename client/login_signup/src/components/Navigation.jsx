import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import SignUp from './SignUp'

export default function Navigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
