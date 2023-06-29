import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Todolist from "../views/Todolist";
import About from "../views/About";
import Login from "../pages/Login";
import TodolistRedux from "../views/TodolistRedux";

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
    path: "/my-basic-reactjs-app",
    element: <Home />,
  },
  {
    path: "/todolist",
    element: <TodolistRedux />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
