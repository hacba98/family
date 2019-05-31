import Dashboard from "layouts/Dashboard.jsx";
import LoginPage from "views/Pages/login.jsx";
import Register from "views/Pages/register.jsx";
import Feedback from "../feedback/FeedbackPage";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: Register },
  { path: "/", name: "Home", component: Dashboard, exact: true },
  { path: "/feedback", name: "Feedback", component: Feedback }
];

export default indexRoutes;
