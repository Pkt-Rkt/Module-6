import React, { useState } from 'react';
import SingleCat from './SingleCat';

// Import the cat images
import cheetahImage from './images/cheetah.jpg';
import cougarImage from './images/cougar.jpg';
import jaguarImage from './images/jaguar.jpg';
import leopardImage from './images/leopard.jpg';
import lionImage from './images/lion.jpg';
import snowLeopardImage from './images/snow-leopard.jpg';
import tigerImage from './images/tiger.jpg';

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: cheetahImage },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: cougarImage },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: jaguarImage },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: leopardImage },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: lionImage },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: snowLeopardImage },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: tigerImage },
];

const BigCats = () => {
  const [cats, setCats] = useState(initialCats);

  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const handleFilterPanthera = () => {
    const pantheraCats = initialCats.filter(cat => cat.latinName.startsWith('Panthera'));
    setCats(pantheraCats);
  };

  const handleReset = () => {
    setCats(initialCats);
  };

  return (
    <div>
      <h2>Big Cats List</h2>
      <button onClick={handleSort}>Sort Alphabetically</button>
      <button onClick={handleReverse}>Reverse List</button>
      <button onClick={handleFilterPanthera}>Filter Panthera Family</button>
      <button onClick={handleReset}>Reset List</button>
      <ul>
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
