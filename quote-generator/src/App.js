import logo from './logo.svg';
import './App.css';
import FetchQAuote from './FetchQuote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Quote Of The Day!</h1>
       <FetchQAuote/>
      </header>
    </div>
  );
}

export default App;
