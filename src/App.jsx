import Home from "./Pages/Home/Home.jsx";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { url } from "../utils/url.js";

const api = axios.create({
  baseURL: url,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
