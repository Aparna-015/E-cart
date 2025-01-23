import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './Components/Productdetails';

function App() {
  return (
    <div className="App">
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
