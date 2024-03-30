import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchData = (id) => {
  const [menu, setMenu] = useState(null);
  const location = useSelector((store) => store.location.location);

  const getData = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_MENU_API}lat=${location.latitude}&lng=${
          location.longitude
        }&restaurantId=${id}`
      );
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
