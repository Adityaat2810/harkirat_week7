import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

const App = () => {

  const [count,setCount] = useState(0);

  // wrap anything that want to use the teleported value 
  // inside the teleporter provider
  return (
    <div>
      
      {/** from where you want to teleport */}
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount}/>  
      </CountContext.Provider>

    </div>
  )
}

function Count({setCount}){
  return <div>
    
    <CountRender count />
    <Buttons setCount={setCount}/>
    </div>

}

function CountRender(){
  const count = useContext(CountContext)
  return <div>
    <b>count is</b> {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)

  return<div>
    <button onClick={()=>{
      setCount(count+1)

    }}> 
      Increase count
    </button>

    <button onClick={()=>{
      setCount(count-1)
    }}>
      Decrease count
    </button>
  </div>

}

export default App