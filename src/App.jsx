import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { countAtom } from './store/atoms/count';

const App = () => {

  // app do not have nay state varuable 

  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot> 
    </div>
  )
}

function Count(){

  console.log('count rerender');

  return <div>
    
    <CountRender  />
    <Buttons/>
    </div>

}

function CountRender(){
 
  const count  = useRecoilValue(countAtom);
  //  const [count,setCount]  = useRecoilState(countAtom);

  
  return <div>
    <b>count is</b> {count}
  </div>
}

function Buttons(){

    const [count,setCount]  = useRecoilState(countAtom);
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