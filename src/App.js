import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'


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
      axios.get(` ${Url}`)
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

    const styledDiv = styled.div`
    width: 40%;
    `

    return(
    <styledDiv>
      <h2>{props.data.name}</h2>
      <Character data={data} />
    </styledDiv>)
  }
  
  const styledSpan = styled.span`
   font-family: 'Press Start 2P', cursive;
   color: yellow;
  `

  return (
    <div className="App">
      <h1 className="Header">Characters of <styledSpan>Star Wars</styledSpan>!</h1>
        {
          currentPeople.map(person => {
            return <People key={person.id} data={person} />
          })
        }
    </div>
  );
}

export default App;