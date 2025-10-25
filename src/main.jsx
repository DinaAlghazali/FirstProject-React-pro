import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from "./pages/HomePage";
import About from "./pages/AboutUsPage";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import Cart from './pages/CartPage';
import CheckOut from './pages/CheckOutPage'
import Account from './pages/AccountPage'
import Contact from './pages/ContactPage'
import NotFound from './pages/NotFoundPage'
import Wishlist from './pages/WishlistPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckOut /> },
      { path: "/account", element: <Account /> },
      { path: "/contact", element: <Contact /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

