import React from 'react';

const MenuPanel = ({ addNote }) => {
  return (
    <div>
      <header>ReactJs Notes</header>
      <button onClick={addNote}>+</button>
    </div>
  )
}


export default MenuPanel;