import Guitar from "./guitar";
const GuitarsList = ({ guitars }) => {
  return (
    <>
      <h2 className="heading">Nuestra Coleccion</h2>
      {guitars.length && (
        <div className="guitar-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}n
        </div>
      )}
    </>
  );
};

export default GuitarsList;
