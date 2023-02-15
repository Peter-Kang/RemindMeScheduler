import logo from './logo.svg';
import './App.css';
import Current from "./CurrentReminders/Current";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Current />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
