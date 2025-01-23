import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './Components/Productdetails';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
      
      <Routes>
        
       <Route path="/" element={<Home />} />

       
    <Route path="/product/:id" element={<Productdetails/>} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
