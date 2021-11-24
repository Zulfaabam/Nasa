import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Apod from './pages/Apod'
// import Rover from './pages/Rover'
import Profile from './pages/Profile'
import ApodDetail from './pages/ApodDetail'
import Footer from './components/navbar/navbar'
import Homepage from './pages/Homepage'
import { createBrowserHistory } from 'history'
import Neo from './pages/Neo'
import NeoDetail from './pages/NeoDetail'

const history = new createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/apod" element={<Apod />}></Route>
          <Route
            path="/apod/:apodTitle/:apodExplanation"
            element={<ApodDetail />}
          ></Route>
          <Route path="/neo" element={<Neo />}></Route>
          <Route path="/neo/:neoId" element={<NeoDetail />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
