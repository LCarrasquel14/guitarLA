import { Link } from "@remix-run/react";
import logoHeader from "p/img/logo.svg";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/">
          <img className="logo" src={logoHeader} alt="Logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
