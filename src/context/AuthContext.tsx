import {createContext, useState, useContext} from 'react';

//creating the context with default values
const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});