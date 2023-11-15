import { Link, useLocation } from "@remix-run/react";
import imagen from "p/img/carrito.png";
const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="navigation">
      <Link to="/" className={pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link to="/nosotros" className={pathname === "/nosotros" ? "active" : ""}>
        Nosotros
      </Link>
      <Link to="/tienda" className={pathname === "/tienda" ? "active" : ""}>
        Tienda
      </Link>
      <Link to="/blog" className={pathname === "/blog" ? "active" : ""}>
        Blog
      </Link>
      <Link to="/car">
        <img src={imagen} alt="carrito" />
      </Link>
    </nav>
  );
};

export default Navigation;
