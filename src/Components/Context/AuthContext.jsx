import React, { createContext, useEffect, useReducer } from "react";

// Define the initial state
const userString = localStorage.getItem("user");
const initialUser = userString ? JSON.parse(userString) : null;

const INITIAL_STATE = {
  currentUser: initialUser,
  dispatch: () => {},
};

// Create the context
export const AuthContext = createContext(INITIAL_STATE);

// Define the reducer
const AuthReducer = (state, action) => {
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
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
