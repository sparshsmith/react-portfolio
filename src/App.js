import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
