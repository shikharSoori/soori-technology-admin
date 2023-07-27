import logo from "./logo.svg";
import "./App.css";
import Layout from "./Dashboard/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import "tippy.js/dist/tippy.css";
import PublicRoutes from "./Routes/PublicRoutes";
import { useSelector } from "react-redux";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated,"authenitiadls")

  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <PrivateRoutes />
         
        </Layout>
      ) : (
        <PublicRoutes />
      )}
      {/* <Layout>Hello</Layout> */}
    </>
  );
}

export default App;
