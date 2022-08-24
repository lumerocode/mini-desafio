import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //Enrutamiento
import { Form } from './Page/Form/Form';
import Navbar from './components/Navbar/Navbar';
import { Content } from './components/Table/Content';

function App() {
  
  return (

    <Router>
      <div className='App'>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </Router>

  )
}

const Home = () => {

  return (
    <>
      <div className='App'>
        <Content/>
      </div>

    </>
  );
}

export default App;
