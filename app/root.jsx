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
  return (
    <Document>
      <Outlet />
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
          <Link className="error-enlace" to={"/"}>Click para volver a la pagina pricipal</Link>
        </p>
      </Document>
    );
  }
}
