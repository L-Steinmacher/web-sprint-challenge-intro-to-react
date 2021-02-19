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

  const [currentPeople, setCurrentPeople] = useState([]);

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

  const People = props => {
    const {data} = props
    return(
    <div>
      <h2>{props.data.name}</h2>
      <Character data={data} />
    </div>)
  }
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {
          currentPeople.map(person => {
            return <People data={person} />
          })
        }
      <Character data={currentPeople} />
    </div>
  );
}

export default App;