import '../styles/App.css';

// COMPONENT IMPORTS 
import Main from './Main'
import Header from './Header'
import CountryList from './CountryList'
import Footer from './Footer'

// IMPORT PAGES

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <CountryList/>
      <Footer/>
    </div>
  );
}

export default App;
