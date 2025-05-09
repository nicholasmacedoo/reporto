import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
