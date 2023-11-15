import { useState } from "react";
import {
  useLoaderData,
  useRouteError,
  useOutletContext,
} from "@remix-run/react";
import { getGuitar } from "~/helpers/getData";
import styles from "~/styles/guitar.css";

export async function loader({ params }) {
  const { url } = params;
  const data = await getGuitar(url);
  if (data.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "informacion no encontrada",
    });
  }
  return data;
}

export function meta({ data }) {
  const error = useRouteError();
  if (error?.status === 404) {
    return [
      {
        title: `GuitarLA - 404`,
      },
      {
        description: `Contenido no encontrado`,
      },
    ];
  }

  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { description: "Venta de guitarras, blog de música y más!" },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Guitar = () => {
  const { agregaAlCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(0);
  const guitarData = useLoaderData();
  const { name, price, description, guitarImagen } =
    guitarData.data[0].attributes;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("debes agregar una cantidad");
      return;
    }
    const guitarraSeleccionada = {
      id: guitarData.data[0].id,
      imagen: guitarImagen.data.attributes.formats.small.url,
      name,
      price,
      cantidad,
    };
    agregaAlCarrito(guitarraSeleccionada);
  };

  return (
    <main className="container guitarra">
      <img
        src={guitarImagen.data.attributes.formats.medium.url}
        alt={`imagen de guitarra ${name}`}
        className="imagen"
      />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{`$${price}`}</p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="amount">amount</label>

          <select
            onChange={(e) => setCantidad(parseInt(e.target.value))}
            id="amount"
          >
            <option value="">--Select -- </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="add to cart" />
        </form>
      </div>
    </main>
  );
};

export default Guitar;
