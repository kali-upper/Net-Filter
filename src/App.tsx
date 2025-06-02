import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import EducationPage from './pages/EducationPage';
import ProgrammingPage from './pages/ProgrammingPage';
import EntertainmentPage from './pages/EntertainmentPage';
import ReligiousPage from './pages/ReligiousPage';
import CalisthenicsPage from './pages/CalisthenicsPage';

// Styles
import './styles/index.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(`${savedTheme}-mode`);
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    document.body.classList.remove(`${theme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);
    
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/religious" element={<ReligiousPage />} />
        <Route path="/calisthenics" element={<CalisthenicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;