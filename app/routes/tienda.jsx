import { useLoaderData } from "@remix-run/react";
import { getData } from "~/helpers/getData";
import Guitar from "~/components/guitar";
import styles from "~/styles/guitar.css";
export function meta() {
  return [
    {
      title: "GuitarLA - tienda",
    },
  ];
}
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const data = await getData(`${process.env.API_URL}/guitars?populate=*`);

  return data.data;
}

const Tienda = () => {
  const guitarsData = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Nuestra Coleccion</h2>
      {guitarsData.length && (
        <div className="guitar-grid">
          {guitarsData.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
