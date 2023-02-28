import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Current from "./pages/CurrentReminders/Current";
import Edit from "./pages/EditReminders/EditReminders";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Current />} />
        <Route path="/Edit" element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
