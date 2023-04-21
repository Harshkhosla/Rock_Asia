import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import AboutUs from './components/About us/AboutUs';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Marble from './components/Marble/Marble';
import Granite from './components/Granite/Granite'


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
    <Route path ="/Home" element={<Home/>}/>
    <Route path ="/About" element={<AboutUs/>}/>
    <Route path ="/Contact Us" element={<Contact/>}/>
    <Route path ="/Products" element={<Granite/>}/>
     
     </Routes>
     {/* <Home/> */}
     <Footer/>
    </div>
  );
}

export default App;
