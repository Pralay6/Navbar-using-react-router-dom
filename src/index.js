import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/careers' element={<Career/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/projects' element={<Projects />}></Route>
  </Routes>
 </Router>
);


