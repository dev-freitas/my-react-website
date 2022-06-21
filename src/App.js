import './sass/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import background from './images/background1.jpg'
import Chat from './components/Chat';


function App() {
  return (
    <div style={{ backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundAttachment: "fixed", height: "100%", margin: "0" }}>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/portfolio' element = {<Portfolio />}/>
      </Routes>
      <Chat />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
