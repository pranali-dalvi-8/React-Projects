import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

function App() {
  const count = useSelector(state=>state.counter.count);
  const dispatch=useDispatch();
  return (
    <>
    <h1> Counter With REDUX!</h1>

    <h2> {count}</h2>

    <button onClick={()=>dispatch(increment())}>increment count</button>
    <button onClick={()=>dispatch(decrement())}>decrement count</button>
    <button onClick={()=>dispatch(reset())}>reset count</button>
    </>
  );
}

export default App;

