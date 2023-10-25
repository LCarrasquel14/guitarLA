import { Link } from "@remix-run/react";
const Guitar = ({ guitar }) => {
  const { name, price, description, guitarImagen, url } = guitar;
  
  return (
    <div className="guitarra">
      <img
        src={guitarImagen.data.attributes.formats.medium.url}
        alt={`imagen de guitarra ${name}`}
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">{`$${price}`}</p>

        <Link className="enlace" to={`/guitars/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
