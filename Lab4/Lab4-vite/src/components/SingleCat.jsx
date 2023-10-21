import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <li>
      <div>
        <img src={cat.image} alt={cat.name} width="100" height="100" />
      </div>
      <div>
        <h3>{cat.name}</h3>
        <p>Latin Name: {cat.latinName}</p>
      </div>
    </li>
  );
};

export default SingleCat;
