import './sass/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Chat from './components/Chat';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/portfolio' element = {<Portfolio />}/>
      </Routes>
      <iframe src="https://free.timeanddate.com/clock/i8e7nerk/n1328/fn14/fs16/fcfff/tct/pct/fti/tt0/th2" frameborder="0" width="349" height="22" allowtransparency="true"></iframe>
      {/* <Home />
      <About />
      <Portfolio />
      <Contact /> */}
      <Chat />

    </BrowserRouter>
    
    </div>
  );
}

export default App;
