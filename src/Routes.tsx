import { Routes, Route } from "react-router-dom";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Exercises } from "./views/Exercises";
import { Routines } from "./views/Routines";
import { History } from "./views/History";
import { createContext, useReducer } from "react";

type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const AuthContext = createContext(initialState);


const reducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const MainRoutes = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={initialState}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </AuthContext.Provider>
  );
};
