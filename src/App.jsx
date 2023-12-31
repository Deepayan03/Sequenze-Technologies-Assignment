import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import CustomCardPage from "./Pages/CustomCardPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={< CustomCardPage/>}></Route>
     <Route path="/sampleProjects" element={<MainPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
