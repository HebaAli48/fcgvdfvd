
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import Loader from "../ui/Loader";

const AppLayout = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <main className="min-h-[80vh] flex flex-col bg-back-color">
        {/* {isLoading && <Loader />}
        {!isLoading && <Outlet />} */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
