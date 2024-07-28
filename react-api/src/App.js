import './App.css';
import Nasa from './Nasa';
import FetchGithubUser from './FetchGithubUser';
import AxiosMovieData from './AxiosMovieData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Welcome To Github Repositories </h1> */}
        {/* <FetchGithubUser/> */}
        {/* <Nasa/> */}
        <AxiosMovieData/>
      </header>
    </div>
  );
}

export default App;
