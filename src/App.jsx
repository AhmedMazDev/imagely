import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { useCallback } from "react/cjs/react.production.min";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = () => {
    console.log("inside fetchData");
    axios
      .get(`https://api.unsplash.com/photos?page=${page}`, {
        params: {
          client_id: "v4zjW08UgbcIQd9YvcQnDeZh2J7FQWmIid5ZajsWKOE",
        },
      })
      .then((response) => {
        setPhotos((prevData) => [...prevData, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    console.log("in useEffect");
    fetchData(page);
  }, []);

  return (
    <div className="App">
      <Header serachTerm={serachTerm} setSearchTerm={setSearchTerm} />
      <Gallery
        photos={photos}
        setPhotos={setPhotos}
        page={page}
        setPage={setPage}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;
