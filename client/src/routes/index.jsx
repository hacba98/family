import Dashboard from "layouts/Dashboard.jsx";
import LoginPage from "views/Pages/login.jsx";
import Register from "views/Pages/register.jsx";
import Feedback from "../feedback/FeedbackPage";
import FeedbackForm from "../feedback/FeedbackForm";

var indexRoutes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: Register },
  { path: "/feedback", name: "Feedback", component: Feedback },
  { path: "/feedbackform", name: "FeedbackForm", component: FeedbackForm },
  { path: "/", name: "Home", component: Dashboard },
];

export default indexRoutes;
