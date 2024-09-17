
import './App.css';

import Hii from './Hii';
import PropsEx2 from './PropsEx2';
import PropPart2 from './PropPart2';
import PropTypes from 'prop-types'
import State1 from './State1';

function App() {
  let name='pranali';
let age=20;
const user={
  name:"neha",
  id:11
}

  return (
    <div className="App">
      <h1> Props  </h1>
      <Hii text='hello students'></Hii>
      <PropsEx2 name={name} age={age} message='welcome to react Props'/>
      <PropPart2 user={user}/>
      {/* Hii.propTypes={
        text.PropTypes.string
        } */}

        <h2>States</h2>
       <State1/>


    
    </div>
  );
}

export default App;
