import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import TopRated from "../pages/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
    ],
  },
]);
export default routes;
