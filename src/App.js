import './App.css';
import Contact from './Contact';
import Header from './header/Header';
import Home from './Home';
import Services from './Services';
import Loader from './Loader Page/Loader';

function App() {
  return (
    <div className="App text-white">
      <Loader />
      <Header />
      <Home />

      <Services />
      <Contact />
      
      </div>
    
  );
}

export default App;
