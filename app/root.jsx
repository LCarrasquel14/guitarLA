import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import styles from "~/styles/index.css";
export const meta = () => {
  return [
    { title: "GuitarLA - Remix" },
    {
      charset: "UTF-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ];
};

export const links = () => {
  return [
    // add stylesheet
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Nunito:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap",
    },
  ];
};

export default function App() {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(
    () => localStorage.setItem("carrito", JSON.stringify(carrito)),
    [carrito]
  );

  const agregaAlCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //iterar sobre el arreglo  e identificar  el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      //Añadir al carrito
      setCarrito(carritoActualizado);
    } else {
      //registro nuevo, agregar al carrito
      setCarrito([...carrito, guitarra]);
    }
  };
  const actualizarCantidad = (guitar) => {
    const carritoActualizado = carrito.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.cantidad = guitar.cantidad;
      }
      return guitarState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarState) => guitarState.id !== id
    );
    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregaAlCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
      <LiveReload />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

// manejo de errores

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
          <Link className="error-enlace" to={"/"}>
            Click para volver a la pagina pricipal
          </Link>
        </p>
      </Document>
    );
  }
}
