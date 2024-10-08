import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from "./HomePage";
import Signup from "./Signup";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="/*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
