import { createBrowserRouter } from "react-router-dom";
import { PageHome } from "../pages/home";
import { BuilderPage } from "../pages/builder";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/new-model",
    element: <BuilderPage />,
  },
]);
