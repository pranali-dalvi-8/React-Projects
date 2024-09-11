
import logo from './logo.svg';
import './App.css';
import { addTopping,addSauce } from './PizzaSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const Pizza = useSelector(state=>state.Pizza)
  const dispatch=useDispatch();
  return (
    <>
   <h1>Welcome To Pizza Hut!</h1>
    <h1>Choose Your Pizza Toppings!</h1>
    <h3>Your Toppings :</h3>
    {Pizza.toppings.map((topping)=>(
      <div key={topping}>
        {topping}
      </div>
    ))}
<h3>Your Sauces :</h3>
{Pizza.sauces.map((sauce)=>(
      <div key={sauce}>
        {sauce}
      </div>
    ))}

    <h3>Add Sauces :</h3>

    <button onClick={()=>dispatch(addTopping('Olives'))}>Add Olives</button>
    <button onClick={()=>dispatch(addTopping('Mushroom'))}>Add Mushroom</button>
    <button onClick={()=>dispatch(addTopping('Extra Cheese'))}>Add Extra cheese</button>


    <button onClick={()=>dispatch(addSauce('Barbeque Sauce'))}>Add Barbeque Sauce</button>
    <button onClick={()=>dispatch(addSauce('sweet chilli Sauce'))}>Add Sweet chilli sauce</button>
    </>
  );
}

export default App;
