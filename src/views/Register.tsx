import { Navbar } from "../components/Navbar";
import TextField from '@mui/material/TextField';
import "../styles/Home.css"
import { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const updateUsername = (event: any) => {
    setUsername(event.target.value);
  }

  const updatePassword = (event: any) => {
    setPassword(event.target.value)
  }

  return (
    <div className="page-container">
      <Navbar/>

      <div className="page-content-container">
        <div className="login-container">

          <div className="login-form">
            <h1>Create New Account</h1>

            <TextField 
              className="text-field"
              id="outlined-basic" 
              label="User Name" 
              variant="outlined" 
              onChange={updateUsername}
              />

            <TextField
              className="text-field"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={updatePassword}
            />


            <button 
              id="authenticate-button"
              type="submit"
              >
              Create Account
            </button>

          </div>

        </div>

      </div>


    </div>
  );
}