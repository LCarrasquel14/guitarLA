import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import styles from "~/styles/car.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export function meta(params) {
  return [{ title: "GuitarLA - Carrito de Compra" }];
}
const Car = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.price,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);
  return (
    <main className="container">
      <h1 className="heading">Carrito de compra</h1>
      <div className="content">
        <div className="car">
          <h2>Articulos</h2>
          {carrito.length === 0
            ? "carrito vacio"
            : carrito.map((producto) => {
                return (
                  <div className="producto" key={producto.id}>
                    <div>
                      <img
                        src={producto.imagen}
                        alt={`imagen del producto ${producto.name}`}
                      />
                    </div>
                    <div>
                      <p className="name">{producto.name}</p>
                      <p className="cantidad">
                        <span>Cantidad:</span>

                        <select
                          onChange={(e) =>
                            actualizarCantidad({
                              cantidad: +e.target.value,
                              id: producto.id,
                            })
                          }
                          className="select"
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </p>

                      <p className="price">
                        $ <span>{producto.price}</span>
                      </p>
                      <p className="subtotal">
                        Subtotal ${" "}
                        <span>{producto.price * producto.cantidad}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn_eliminar"
                      onClick={() => eliminarGuitarra(producto.id)}
                    >
                      x
                    </button>
                  </div>
                );
              })}
        </div>
        <aside className="summary">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar:${total}</p>
        </aside>
      </div>
    </main>
  );
};

export default Car;
