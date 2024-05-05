import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Homepage from "@/pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
