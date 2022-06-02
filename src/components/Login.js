import React from 'react'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import Home from './Home'

export default function Login() {
const [emaillog, setEmaillog] = useState("")
const [passwordlog, setPasswordlog] = useState("")
const [flag, setFlag] = useState(false)
const [home, setHome] = useState(true)

const handleLogin=(e)=>{
    e.preventDefault();
    let mail=localStorage.getItem('Email').replace(/"/g,"");
    let pass=localStorage.getItem('Password').replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty")

    }else if(passwordlog !==pass || emaillog !==mail ){
        setFlag(true)
    }else{
        setHome(!home)
        setFlag(false);
    }
}
  return (
    <div>
{home ? (

<form onSubmit={handleLogin}>
    <h1>Login</h1>
<div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
            onChange={(event)=> setEmaillog(event.target.value)}
         
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event)=> setPasswordlog(event.target.value)}
         
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {flag &&(
            <Alert color="primary" variant="danger">Please fill correct information!
          </Alert>
          )
        }
      
        </form>
        ):( 
            <Home/>
        )}
    </div>
  )
}
