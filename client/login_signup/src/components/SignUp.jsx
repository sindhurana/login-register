import axios from 'axios';
import React, { useState } from 'react'

import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/signup", { name, email, password })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form >
                    <img className="mb-4" src="download.jpg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="floatingInput" placeholder="Enter your name" />
                        <label htmlFor="floatingInput">Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign Up</button>
                    <h3><p> OR</p></h3>

                    <Link to="/"><button className="btn btn-primary w-100 py-2" >Login</button></Link>

                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
            </main>
        </>
    )
}
