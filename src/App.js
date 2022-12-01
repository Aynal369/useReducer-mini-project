import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </HelmetProvider>
  );
}

export default App;
