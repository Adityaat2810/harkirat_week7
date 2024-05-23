import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
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

    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
   const count = useRecoilValue(countAtom);
   return <div>
    {(count%2==0)?"It is even" :null}
   </div>
}

function Buttons(){

  const setCount  = useSetRecoilState(countAtom);
  console.log('Buttons component rerenders');
  return<div>
    <button onClick={()=>{
      setCount(c=>c+1)

    }}> 
      Increase count
    </button>

    <button onClick={()=>{
       setCount(c=>c-1) 
    }}>
      Decrease count
    </button>
  </div>

}

export default App