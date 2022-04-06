import './App.css';
import Header from './components/Layout/Header'
import HomeContent from './components/Pages/HomeContent'
import SingleVideo from './components/Pages/SingleVideo'
import data from './data/db';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomeContent data={data} />} />
          <Route path='/video/:id' element={<SingleVideo data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;