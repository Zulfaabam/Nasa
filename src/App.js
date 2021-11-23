import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

import Apod from "./pages/Apod";
import Rover from "./pages/Rover";
import Profile from "./pages/Profile";
import Apod_detail from "./pages/Apod_detail";
import Footer from './components/navbar/navbar';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Apod/>}></Route>
          <Route path="/Rover" element = {<Rover/>}></Route>
          <Route path="/Profile" element = {<Profile/>}></Route>
          <Route path="/Apod/details" element={<Apod_detail/>}></Route>
        </Routes>
        <Footer ></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
