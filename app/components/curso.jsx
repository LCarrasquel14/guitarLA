import React from "react";

const Curso = ({ curso }) => {
  const { image, contenido, titulo } = curso;

  return (
    <section className="curso">
      <style jsx="true">{`.curso{
            background-linear(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.7), url(${image.data.attributes.url}))
        }`}</style>
      <div className="container curso-grid">
        <div className="content">
          <h2 className="heading">{titulo}</h2>
          <p className="text">{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
