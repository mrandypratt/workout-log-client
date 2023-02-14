import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import TextField from '@mui/material/TextField';
import "../styles/Home.css"
import { useState } from "react";

export const Home = () => {
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
          <h1>Welcome to Workout Log</h1>

          <div className="login-form">
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
              Log In
            </button>

          </div>

          <hr className="divider"></hr>

          <Link to="/register" id="register-button">
            Create Account
          </Link>

        </div>

      </div>


    </div>
  );
}