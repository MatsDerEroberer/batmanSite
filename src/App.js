//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from './components/LandingPage'
import ToDo from "./components/ToDo.js"
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/"     element={<LandingPage />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
