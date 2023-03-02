import { useState } from "react";
import { Navbar } from "../components/Navbar";
import TextField from '@mui/material/TextField';
import "../styles/Home.css"
import { getServerURL } from "../functions/getURL";
import { PasswordToggleVis } from "../components/PasswordToggleVis";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const updateUsername = (event: any): void => {
    setUsername(event.target.value);
  }

  const updatePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  const registerAccount = async () => {
    const baseURL = getServerURL();
    const APIURL = baseURL + "/register";

    const authData = {
      username: username,
      password: password
    }
    
    try {
      const response = await fetch(APIURL, {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);

    } catch (e) {
      console.error(e)
    } finally {
      console.log("Complete!");
    }
  }

  return (
    <div className="page-container">
      <Navbar/>

      <div className="page-content-container">
        
        <div className="login-container">
          
          <h1 id="form-title">Create New Account</h1>

          <hr className="divider-top"></hr> 

          <div className="login-form">
            <div className="text-field-container">
              <TextField 
                id="outlined-basic" 
                label="User Name" 
                variant="outlined" 
                onChange={updateUsername}
                style={{width: "100%"}}
                />
            </div>

            <div className="text-field-container">
              <PasswordToggleVis/>
            </div>

            <button 
              id="register-button"
              type="submit"
              onClick={registerAccount}
            >
              Register Account
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}