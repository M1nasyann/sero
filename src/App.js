import './App.css';
import { useSelector, useDispach } from 'react-redux/es/hooks/useSelector';
import { checking } from './Calcslice';
import { current } from '@reduxjs/toolkit';
function App() {
  const dispuch = useDispach();
  const result = useSelector(sate => state.calc.result);
  const current =useSelector(state => state.calc.current);
  const arr=  [100,200, 55, 150, 250];
  return (
    <div className="App">
      {result}
      {arr.map(item=> <button onClick={()=>dispuch(checking(item)) }>{item}</button>)}
      <button>prev</button>
      <div className="item"></div>
      <button>NExt</button>
    </div>
  );
}

export default App;
