import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Locations from './Components/Locations';
import Form from './Form';
import Student1 from './Components/Student1';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact/' element={<Contact/>}>
              <Route path='location' element={<Locations/>} />
              <Route path='form' element={<Form/>}/>
              </Route>
              <Route path='/student/:name' element={<Student1/>}/>
              
        <Route path='*' element={<ErrorPage/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
