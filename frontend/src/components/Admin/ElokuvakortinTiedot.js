import React from 'react';

const ElokuvakortinTiedot = ({ leffa }) => {
  return (
    <>
      <h5 className="card-title"> {leffa.title}</h5>
      <p className="card-text"> {leffa.director}</p>
      <p className="card-text">{leffa.year}</p>
      <p className="card-text">{leffa.runtime}</p>
      <p className="card-text">{leffa.description}</p>
      <p className="card-text"> Arviot: {leffa.rating} / 10</p>
      <p className="card-text">{leffa.genre}</p>
    </>
  );
};

export default ElokuvakortinTiedot;
