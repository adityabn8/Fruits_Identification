import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Usage from './pages/Usage';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Results from './pages/Results';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' Component={LandingPage}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/usage' Component={Usage}></Route>
        <Route path='/results' Component={Results}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
