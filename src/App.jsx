import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import { Landing } from './components/Landing';

const App = () => {
  return (
   <div> 
    {/**this topbar remain consistent content below it changes */}
    <div style={{background:"black",color:"white"}}>
      Hi this is the topbar
    </div>


    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
