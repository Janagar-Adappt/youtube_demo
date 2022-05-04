import React from 'react'
import './App.css';
import { Header, HomeContent } from './components/Pages/HomeContent'
import SingleVideo from './components/Pages/SingleVideo'
import data from './data/db';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomeContent data={data} />} />
          <Route path='/video/:id' element={<SingleVideo data={data} />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;