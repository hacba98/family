import Dashboard from "layouts/Dashboard.jsx";
import LoginPage from "views/Pages/login.jsx";
import Register from "views/Pages/register.jsx";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: Register },
  { path: "/", name: "Home", component: Dashboard },
];

export default indexRoutes;
