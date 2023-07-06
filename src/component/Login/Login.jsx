import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        Email: '',
        Password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let { Email, Password } = credentials
        let res = await fetch("https://falnibackend.onrender.com/login", {
            method: "post",
            body: JSON.stringify({
                Email, Password
            }), headers: {
                "content-Type": "application/json"
            }
        })
        let result = await res.json()

        if (result.status === false) {
            alert(result.data)
        } else {
            navigate("/stock")
        }


        // Reset the form fields after submission
        setCredentials({
            email: '',
            password: '',
        });
    };

    return (
        <>
        <h2>Login</h2>
        <div className="container">
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="Email"
                placeholder='Enter Your Email'
                value={credentials.Email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="Password"
                placeholder='Enter Your Password'
                value={credentials.Password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p>
              <Link to={"/"}>Don't have an account?</Link> 
            </p>
          </form>
        </div>
      </>
    );
};

export default Login;
