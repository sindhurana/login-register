import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {

    const emailElement = useRef();
    const passwordElement = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = emailElement.current.value;
        let password = passwordElement.current.value;

        axios.post("http://localhost:8080/signin", { email, password })
            .then(result => {
                console.log(result.data);
                if (result.data == "success") {
                    emailElement.current.value = "";
                    passwordElement.current.value = "";
                    navigate("/", this.state.)
                }
                else {
                    alert("User Not Found")
                }
            })
            .catch(e => console.log(e))


    }
    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form >
                    <img className="mb-4" src="download.jpg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>



                    <div className="form-floating">
                        <input type="email" className="form-control" ref={emailElement} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" ref={passwordElement} id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Login</button>
                    <h3><p> OR</p></h3>

                    <Link to="/signup"><button className="btn btn-primary w-100 py-2" >Sign Up</button></Link>

                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                </form>
            </main>
        </>
    )
}
