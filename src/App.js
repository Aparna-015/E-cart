import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './Components/Productdetails';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Footersection from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
      
      <Routes>
        
       <Route path="/" element={<Home />} />

       
    <Route path="/product/:id" element={<Productdetails/>} /> 
    <Route path="/cart/:id" element={<Cart/>} /> 
      </Routes>
    </Router>
  <Footersection/>
    </div>
  );
}

export default App;
