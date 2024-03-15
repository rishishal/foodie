import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { SWIGGY_API } from "./utils/constans";
import Home from "./page/Home";

function App() {
  const [swiggyData, setSwiggyData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(SWIGGY_API);
        const response = await res.json();
        setSwiggyData(response?.data);
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Home Data={swiggyData} />
    </>
  );
}

export default App;
