import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import SchemesAndServices from "./Components/SchemesAndServices";
import Weather_forcast from "./Components/WeatherForecast";
import ErrorPage from "./Components/ErrorPage";
import { AuthProvider } from "./AuthContext";
import CropPrediction from "./Components/CropPrediction";
import Apply from "./Components/Apply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Hero /> },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/scheme",
        element: <SchemesAndServices />,
        children: [
          {
            path: "/scheme/apply/:id",
            element: <Apply />,
          },
        ],
      },
      {
        path: "/cropPredicition",
        element: <CropPrediction />,
      },
      {
        path: "/forecast",
        element: <Weather_forcast />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
