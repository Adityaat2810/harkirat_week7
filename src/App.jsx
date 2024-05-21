import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

const App = () => {

  // right way to navigate without hard reloadouter only
  //whatever use useNavigate need to be inside the browser router
  // const navigate=useNavigate();

  return (
    <div>

      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

function AppBar() {


  const navigate = useNavigate();

  {/**this topbar remain consistent content below it changes */ }
  return <>
    <div style={{ background: "black", color: "white" }}>
      Hi this is the topbar
    </div>

    <div>
      <button onClick={() => {
        navigate('/dashboard')
      }}>Dashboard</button>


      <button onClick={() => {
        navigate('/')

      }}>Landing</button>
    </div>

  </>




}

export default App;
