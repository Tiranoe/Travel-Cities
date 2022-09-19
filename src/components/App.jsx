import '../styles/App.css';

// COMPONENT IMPORTS 
import Home from './Home'
import Country from './Country'
import CountryList from './CountryList'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <Country/>
      <CountryList/>
      <Footer/>
    </div>
  );
}

export default App;
