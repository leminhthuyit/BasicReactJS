import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Todolist from "../views/Todolist";
import About from "../views/About";
import Login from "../pages/Login";

// Layouts
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayoutMain />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/todolist", element: <Todolist /> },
//       { path: "/about", element: <About /> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todolist",
    element: <Todolist />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
