import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0);

  /**
   * If want to call buttons in count then we need to pass
   * setCount also as a prop {count do not really use it 
   * just passed down to button }  => becomes slightly 
   * unmanageable to pass down the props .
   * 
   * propdrilling => drilling down the prop .
  */
  return (
    <div>
      
      <Count count={count} setCount={setCount}/>

    </div>
  )
}

function Count({count,setCount}){
  return <div>
    <b>Count is </b>{count}
    <div>
    <Buttons count={count} setCount={setCount}/>
    </div>

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