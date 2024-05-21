import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0);

  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
  return <div>
    <b>Count is </b>{count}
  </div>
}

function Buttons({count,setCount}){
  return<>
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
  </>

}

export default App