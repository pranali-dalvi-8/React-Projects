import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Planet from './Components/Planet';
import Planets from './Planets';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
