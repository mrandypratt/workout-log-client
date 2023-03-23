import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import TextField from '@mui/material/TextField';
import "../styles/Home.css"
import { getServerURL } from "../functions/getURL";
import { PasswordToggleVis } from "../components/PasswordToggleVis";
import { AuthContext } from "../Routes";
import { Alert } from "@mui/material";
import { LoginCredentials } from "../types/User";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [failedAttempt, setFailedAttempt] = useState<boolean>(false);

  const authState = useContext(AuthContext);
  
  const updateUsername = (event: any): void => {
    setUsername(event.target.value);
  }

  const authenticateUser = async () => {
    const baseURL = getServerURL();
    const APIURL = baseURL + "/auth/login";

    const loginCredentials: LoginCredentials = {
      username: username,
      password: password
    }
    
    try {
      const response = await fetch(APIURL, {
        method: 'POST',
        body: JSON.stringify(loginCredentials),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.status === 401){
        console.log("Invalid Credentials")
        setFailedAttempt(true);
        // TODO: Alert User of failed attempt
      } else if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("Result:")
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
          <h1 id="form-title">Welcome to Workout Log</h1>
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
              <PasswordToggleVis
                setPassword={setPassword}
              />
            </div>

            {failedAttempt && 
              <Alert severity="error">Invalid Credentials</Alert>
            }

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