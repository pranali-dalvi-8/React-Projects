import './App.css';
import Nasa from './Nasa';
import FetchGithubUser from './FetchGithubUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Welcome To Github Repositories </h1> */}
        {/* <FetchGithubUser/> */}
        <Nasa/>
      </header>
    </div>
  );
}

export default App;
