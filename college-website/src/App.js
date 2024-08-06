import './App.css';
import { lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Footer from './Footer';
const About=lazy(()=> import("./Components/About"));
const Home=lazy(()=> import("./Components/Home"));
const Placements=lazy(()=> import("./Components/Placements"));
const Campus=lazy(()=> import("./Components/Campus"));





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/placements",
      element: <Placements/>
    },
    {
      path: "/campus",
      element: <Campus/>
    }
  ])
  return (
    <div className="App">
     
      <header className="App-header">
         <Navbar/> 
         {/* <h1>Aflatoon University</h1> */}
         <Suspense fallback={<div>Loading......</div>}>
         <RouterProvider router={router}/>
         </Suspense>
         <Footer/>
      </header>
    </div>
  );
}

export default App;
