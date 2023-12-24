import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Users from "../Users/Users";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserDetails from "../Users/UserDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PriveteRoute from "../../PriveteRoute/PriveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/users/:id",
        element: (
          <PriveteRoute>
            <UserDetails />
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);
