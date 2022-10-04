// import Navbar from "./components/Navbar";
import Row from "./Row";
import requests from "./requests";
import './App.css';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Account from './pages/Account';

function App() {
  return (
      <div className="App">
        <h1>Kids Watch</h1>
        <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
        <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="SciFi Movies" fetchUrl={requests.fetchSciFiMovies} />
        <Row title="Family TV" fetchUrl={requests.fetchFamilyTV} />
        <Row title="Animation TV" fetchUrl={requests.fetchAnimationTV} />
        <Row title="Comedy TV" fetchUrl={requests.fetchComedyTV} />
        <Row title="SciFi TV" fetchUrl={requests.fetchSciFiTV} />
      </div>
  );
}

export default App;
