import React, { useEffect, useState } from 'react'

import CardList from './components/cardlist/CardList';
import SearchBox from './components/searchbox/SearchBox';


import './App.scss'

const App = () => {
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => setMonsters(data.users))
    .catch(error => console.log(error))
  }, []);

  const onSearchChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  }

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }

  useEffect(() => {
    const newMonsterList = monsters.filter((monster) => {
      return (
        monster.firstName.toLowerCase().includes(searchString) ||
        monster.lastName.toLowerCase().includes(searchString) 
      );
    });
    setFilteredMonsters(newMonsterList);
  }, [searchString, monsters]);

  return (
    <div className='container'>
      <h1 className='header'>{title}</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder='Search Monsters'
      />
      <SearchBox
        onSearchChange={onTitleChange}
        placeholder='Set title'
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  )
}


export default App;