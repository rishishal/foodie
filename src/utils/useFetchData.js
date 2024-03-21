import { useEffect, useState } from "react";
import { MENU_API } from "./constans";

const useFetchData = (id) => {
  const [menu, setMenu] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(MENU_API + id);
      const response = await res.json();
      setMenu(response?.data);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return menu;
};

export default useFetchData;
