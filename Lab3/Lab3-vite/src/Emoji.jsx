import React, { useState } from 'react';

const Emoji = () => {
  const [emoji, setEmoji] = useState('😀');

  const changeMood = () => {
    setEmoji(emoji === '😀' ? '😠' : '😀');
  };

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
