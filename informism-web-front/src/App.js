import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to Informism</h1>} />
          <Route path="/*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
