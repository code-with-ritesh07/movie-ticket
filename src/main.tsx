import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginPage } from "./components/auth/Log/LoginPage.tsx";
import { RegisterPage } from "./components/auth/register/register.tsx";
import { MainLayout } from "./components/layouts/MainLayout.tsx";
import { NotFound } from "./components/NotFound.tsx";
import { TicketForm } from "./components/TicketForm.tsx";
import { DashboardPage } from "./components/dashboard/index.tsx";
import { DashboardMoviePage } from "./components/dashboard/movie/DashboardMoviePage.tsx";
import { MovieForm } from "./components/dashboard/movie/MovieForm.tsx";
import { DashboardTheaterPage } from "./components/dashboard/theater/TheaterPage.tsx";
import { TheaterForm } from "./components/dashboard/theater/TheaterForm.tsx";
import { DashboardUserPage } from "./components/dashboard/users/userPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/movie/:id",
        element: <TicketForm />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "/dashboard",

            element: <DashboardMoviePage />,
          },
          {
            path: "/dashboard/theater",

            element: <DashboardTheaterPage />,
          },

          {
            path: "/dashboard/movie/create/:id",
            element: <MovieForm />,
          },
          {
            path: "/dashboard/theater/create/:id",
            element: <TheaterForm />,
          },
          {
            path: "/dashboard/users",
            element: <DashboardUserPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
