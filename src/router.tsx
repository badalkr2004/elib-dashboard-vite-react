import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Homepage from "@/pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
