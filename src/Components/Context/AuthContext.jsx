import React, { createContext, useReducer, useEffect } from "react";

// Define the initial state
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// Create the context with a default value for dispatch
export const AuthContext = createContext({
  currentUser: INITIAL_STATE.currentUser,
  dispatch: () => {}, // Default function to prevent undefined errors
});

// Define the reducer
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

// Create the provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
