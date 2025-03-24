import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">#VanLife</Link>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
