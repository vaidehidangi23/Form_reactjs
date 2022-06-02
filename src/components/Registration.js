import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from './Login'

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name|| !email || !password){
          setFlag(true)
      }
      else{
          setFlag(false)
          localStorage.setItem("Email", JSON.stringify(email))
          localStorage.setItem("Password", JSON.stringify(password))
          setLogin(!login);
      }
  }

const handleClick =()=>{
    setLogin(!login)
}

  return (
    <div>
{login ? (

      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            onChange={(event)=> setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
            onChange={(event)=> setEmail(event.target.value)}
         
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event)=> setPassword(event.target.value)}
         
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <p onClick={handleClick}>Already registered Login?</p>
        {flag &&(
            <Alert color="primary" variant="danger">Please fill every field in the form
          </Alert>
          )
        }
      </form>
      ):(
      <Login/>
      )}
    </div>
  );
}
