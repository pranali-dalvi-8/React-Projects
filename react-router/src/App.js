import './App.css';
import Navbar from './Components/Navbar';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import User from './Components/User';
import Home from './Components/Home';
import About from './Components/About';





function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }, {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/user/:username",
      element:<User/>
    }
  ])
  return (
    <div className="App">
     
       <Navbar/>
       <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
