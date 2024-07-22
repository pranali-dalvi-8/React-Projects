import './App.css';
import { useState } from 'react';
import Parent from './Parent';
import { ThemeContext } from './Context';

function App() {
  const[theme , setTheme]=useState('light');
  function toggleTheme(){
    setTheme((theme)=>(theme==="light")?'dark':'light');
  }
  return (
    <ThemeContext.Provider value={theme}>

    <div className="App">
      <h1>Theme App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Parent/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
