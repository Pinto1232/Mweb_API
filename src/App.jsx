import React from 'react';
import './App.css'
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Home />
      <Router>
        
      </Router>
      
    </div>
  );
};

export default App;