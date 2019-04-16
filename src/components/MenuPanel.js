import React from 'react';

const MenuPanel = ({ notesList, currentItem, addNote, setNote }) => {
  return (
    <form onSubmit={addNote}>
      <header>ReactJs Notes</header>
      <input type="text" value={currentItem.value} onChange={setNote} />
      <input type="submit" value="+"/>
    </form>
  )
}


export default MenuPanel;