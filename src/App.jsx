import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <AppRoutes />
    </div>
  );
}

export default App;
