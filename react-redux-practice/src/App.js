import logo from './logo.svg';
import './App.css';
// import {ChangeTheNumber} from './reducer';
import {incNum} from './action';
import {decNum} from './action';
import {useDispatch , useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const ChangeTheNumber=useSelector(state=>state.ChangeTheNumber)
  return (
    <>
    <div>
      <a onClick={()=>dispatch(decNum())} title='DECREMENT'> decrease</a>
      <input typr='text' value={ChangeTheNumber} />
      <a onClick={()=>dispatch(incNum())} title='INCREMENT'> increase</a>

  
    </div>
    </>
  );
}

export default App;
