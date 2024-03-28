import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <Provider store={appStore}>
      <>
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
      </>
    </Provider>
  );
};

export default Layout;
