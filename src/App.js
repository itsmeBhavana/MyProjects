import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import './App.css'
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
          <Nav/>
          <Routes>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;


