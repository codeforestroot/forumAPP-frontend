
import './App.css';
//import {Button } from 'react-bootstrap';
import Navbarr from './navbar'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Login from './Login'
import Signup from './Signup'
import Newdis from './Newdis'
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* <Navbarr /> */}

        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Newdis" element={<Newdis />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
