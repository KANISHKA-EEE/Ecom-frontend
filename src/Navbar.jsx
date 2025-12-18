import { Link } from "react-router-dom";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">Kani Shopping</Link>
      </div>

      <ul className="sidebar-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/products">🛍 Products</Link></li>
        <li><Link to="/cart">🛒 Cart</Link></li>
        <li><Link to="/contact">📞 Contact Us</Link></li>
      </ul>
    </aside>
  );
}

export default Navbar;
