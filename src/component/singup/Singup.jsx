import React, { useState } from 'react'
import "./Singup.css"
import {Link} from "react-router-dom"

function Singup() {
  const [formData, setFormData] = useState({
    Fullname: "",
    Email: "",
    Password: ""
  })

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    let { Fullname, Email, Password } = formData
    let res = await fetch("https://falnibackend.onrender.com/singup", {
      method: "post",
      body: JSON.stringify({
        Fullname, Email, Password
      }), headers: {
        "content-Type": "application/json"
      }
    })

    let result = await res.json()

    if (result.status === false) {
      alert(result.data)
    } else {
      alert("account created successfully")
    }
  }





  return (
    <div>
    <form onSubmit={onSubmit} className="signup-form">
      <h2 style={{ color: 'blue', fontSize: '24px' }}>Sign Up</h2>
      <div className="form-group">
        <label style={{ fontWeight: 'bold' }}>Full Name</label>
        <input
          type="text"
          name="Fullname"
          value={formData.Fullname}
          onChange={handleChange}
          placeholder="Enter FullName"
          required
          style={{ width: '100%', padding: '5px' }}
        />
      </div>
      <div className="form-group">
        <label style={{ fontWeight: 'bold' }}>Email</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
          style={{ width: '100%', padding: '5px' }}
        />
      </div>
      <div className="form-group">
        <label style={{ fontWeight: 'bold' }}>Password</label>
        <input
          type="password"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
          style={{ width: '100%', padding: '5px' }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
        Sign Up
      </button>
      <div className="form-options">
        <p>
          <Link to="/login" style={{ color: 'blue' }}>
            Already have an account?
          </Link>
        </p>
      </div>
    </form>
  </div>
  
  )
}

export default Singup