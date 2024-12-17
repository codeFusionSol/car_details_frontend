import Home from "./Pages/Home/Home.jsx";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { url } from "../utils/url.js";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: url,
});

function App() {
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const [AllFormsData, setAllFormsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    setId(id);

    const fetchData = async () => {
      if (id) {
        const response = await api.get(`/ownerDetails/get-all-forms/${id}`);
        console.log(response.data);
        setData(response.data.data);
        setAllFormsData(response.data.AllFormsData);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/:id"
              element={<Home data={data} AllFormsData={AllFormsData} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
