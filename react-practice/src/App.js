
import './App.css';

import Hii from './Hii';
import PropsEx2 from './PropsEx2';
import PropPart2 from './PropPart2';
import PropTypes from 'prop-types'
import State1 from './State1';
import ArrayDemo from './ArrayDemo';
import Map from './Map';
import ForEachMap from './ForEachMap';
import CompOne from './PropDrilling/CompOne'
// import { createContext } from 'react';
// import Comp1 from './ContextApi/Comp1'
import UseState from './UseState';
import FormDemo from './Components/FormDemo';
import FormDemo1 from './Components/FormDemo1';
import FormDemo2 from './Components/FormDemo2';
import FetchApi from './API/FetchApi';
import Axios from './API/Axios';
import AxiosPostdata from './API/AxiosPostdata';



function App() {
  let name='pranali';
let age=20;
const user={
  name:"neha",
  id:11
}
const f_name='Pranali'

// const StudentInfoContext = createContext()

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

       <h2>Array </h2>
       <ArrayDemo/>
       <h2>MAP()</h2>
       <Map/>
       <h2>ForEach And Map </h2>
       <ForEachMap/>
       <h2>PropDrilling</h2>
       <CompOne f_name={f_name}/>
       <h2>Context API</h2>
       {/* <div className='App'>
       <StudentInfoContext.Provider value={f_name}>
        <Comp1/>
       </StudentInfoContext.Provider>
       </div> */}

       <h2>UseState examples</h2>
       <UseState/>
       <h2>Form</h2>
       <FormDemo/>
       <h2>Forms User Input</h2>
       <FormDemo1/>
       <h2>Forms with Regex</h2>
       <FormDemo2/>
       {/* <h2>fetch API</h2>
       <FetchApi/>
       <h2>Axios</h2>
       <Axios/> */}
       <h2>Axios Post data</h2>
       <AxiosPostdata/>
    </div>
  );
}

export default App;
{/* export {StudentInfoContext} */}