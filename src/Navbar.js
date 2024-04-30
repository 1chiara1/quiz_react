import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li> </li>
          <li class="nav-item">
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
