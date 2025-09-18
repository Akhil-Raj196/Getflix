import './App.css';
import NetflixPage from './NetflixPage';
import SignIn from './SignIn'
import NetflixMovie from './NetflixMovie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NetflixPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/movies" element={<NetflixMovie />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
