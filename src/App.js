
//vendors
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Quiz from './components/quiz'
import NavBar from './components/navBar';
import Home from './components/home'
import Resources from './components/resources'
import Info from './components/info';
import Ml from './components/ml';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Resources" element={<Resources/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="/ml" element={<Ml/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
