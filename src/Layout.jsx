import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import LocationContext from "./utils/LocationContext";
import CityContext from "./utils/CityContext";
import { useEffect, useState } from "react";
import {Toaster} from "react-hot-toast"

const Layout = () => {

  const [location, setLocation] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
  });

  const [city, setCity] = useState("delhi");

  useEffect(() => {
    const successCallback = (position) => {
      const { latitude, longitude } = position?.coords;
      console.log(latitude, longitude);
      setLocation({
        latitude: latitude,
        longitude: longitude,
      });
    };
    const errorCallback = (error) => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  //get Location

  return (
    <Provider store={appStore}>
      <>
      <LocationContext.Provider
          value={{ location: location, setLocation: setLocation }}
        >
          <CityContext.Provider value={{ city: city, setCity: setCity }}>
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={30}
              containerClassName="notification-container"
              toastOptions={{
                className: "notification-toast",
                duration: 1500,
              }}
            />
        <Header />
        <Outlet />
        </CityContext.Provider>
        </LocationContext.Provider>
      </>
    </Provider>
  );
};

export default Layout;
