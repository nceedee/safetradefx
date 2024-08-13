import React, { createContext, useReducer } from "react";

// Create the context
const AuthContext = createContext();

// Define the initial state
const INITIAL_STATE = {
  currentUser: null,
};

// Define the reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
