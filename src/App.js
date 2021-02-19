import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const Url = `https://swapi.dev/api/people/`

  const [currentPeople, setCurrentPeople] = useState({});

  useEffect (()=> {
    const fetchData = ()=> {
      axios.get(`${Url}`)
      .then(res => {
        setCurrentPeople(res.data)
      })
      .catch(err => {
        debugger
        console.log(err)
      })
    }
    fetchData()
  },[])

  const People = props => (
    <div>
      <h2>{props.name}</h2>
      <Character data={props} />
    </div>
  )

    console.log(currentPeople)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character data={currentPeople} />
    </div>
  );
}

export default App;
