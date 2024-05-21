import React,{Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const  Dashboard =  lazy(()=>import('./components/Dashboard'))
const  Landing =  lazy(()=>import('./components/Landing'));

const App = () => {

  // right way to navigate without hard reloadouter only
  //whatever use useNavigate need to be inside the browser router
  // const navigate=useNavigate();


  /**
   * suspense api , asynchronous component fectching ,asynchronous 
   * data fetching 
   * */


  return (
    <div>

      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"...loading"}><Landing /></Suspense>}  />
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
