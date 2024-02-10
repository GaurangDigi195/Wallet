import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Onboard2 from "./components/Onboard2";
import FinalOnboard from "./components/FinalOnboard";
import Portfolio from "./components/Portfolio";

const Index = () => {
  return (
    <div className="index">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/onbard2",
        element: <Onboard2 />,
      },
      {
        path: "/finalonboard",
        element: <FinalOnboard />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
