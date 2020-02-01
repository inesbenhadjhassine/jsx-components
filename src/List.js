import React from 'react';
import './App.css';
import ListItem from './ListItem';

function List() {
  return (
      <div>
   <h2>List</h2>
   <ul><ListItem />
   <ListItem />
   <ListItem/>
   </ul>
   </div>
  );
}

export default List;