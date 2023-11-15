import { useOutletContext } from "@remix-run/react";
import ImagenNostros from "p/img/nosotros.jpg";
import styles from "../styles/nosotros.css";
export function meta() {
  return [{ title: "GuitarLa - Nosotros" }];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Nosotros = () => {
  const data = useOutletContext();
  console.log(data);
  return (
    <main className="container us">
      <h2 className="heading">Nosotros</h2>

      <div className="content">
        <img src={ImagenNostros} alt="Imagen nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            corrupti voluptatibus, odio natus quasi minima odit eaque nulla
            illum iure voluptas porro optio quidem libero cumque necessitatibus
            quibusdam, incidunt assumenda nobis. Ad alias, tempore magnam
            asperiores aut quidem minus quo facilis eos cumque porro explicabo
            voluptatum ut odit inventore
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            corrupti voluptatibus, odio natus quasi minima odit eaque nulla
            illum iure voluptas porro optio quidem libero cumque necessitatibus
            quibusdam, incidunt assumenda nobis. Ad alias, tempore magnam
            asperiores aut quidem minus quo facilis eos cumque porro explicabo
            voluptatum ut odit inventore
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
