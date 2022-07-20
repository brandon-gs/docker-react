import { Routes, Route } from "react-router-dom";
import { routes } from "./router";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes.map((CurrentRoute, index) => (
        <Route
          path={CurrentRoute.path}
          element={<CurrentRoute.Component />}
          key={`route-index-${index}`}
        />
      ))}
    </Routes>
  );
}

export default App;
