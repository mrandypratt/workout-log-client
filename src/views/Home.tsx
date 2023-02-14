import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import TextField from '@mui/material/TextField';
import "../styles/Home.css"
import { useState } from "react";

export const Home = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const updateUsername = (event: any): void => {
    setUsername(event.target.value);
  }

  const updatePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  const authenticateUser = (): void => {
    console.log(username);
    console.log(password);
  }

  return (
    <div className="page-container">
      <Navbar/>

      <div className="page-content-container">
        
        <div className="login-container">
          <h1 id="form-title">Welcome to Workout Log</h1>
          <hr className="divider-top"></hr> 

          <div className="login-form">
            <div className="text-field-container">
              <TextField 
                id="outlined-basic" 
                label="User Name" 
                variant="outlined" 
                onChange={updateUsername}
                />
            </div>

            <div className="text-field-container">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={updatePassword}
              />
            </div>

            <button 
              id="authenticate-button"
              type="submit"
              onClick={authenticateUser}
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