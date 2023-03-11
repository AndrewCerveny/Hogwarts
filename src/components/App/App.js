import logo from '../../images/logo.svg'
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Display from '../Display/Display';
import cleanSpells from '../../util/cleaning';
import EnterPage from '../EnterPage/EnterPage';
import { Route } from 'react-router-dom';




function App() {
  const [spells , setSpells] = useState([])
  const[ houseDeeds, setHouses] = useState([])
  const [error, setError] = useState('')
  
  
  const getSpells = async () => {
    const url = 'https://wizard-world-api.herokuapp.com/Spells'
    setError('')

    try {
      const response = await fetch(url)
      const spells = await response.json()
      const alteredSpells = cleanSpells(spells)
      setSpells(alteredSpells)
    }catch(error){
      setError(error.message)
    }
  }

  const getHouses = async () => {
    const url = 'https://wizard-world-api.herokuapp.com/Houses'
    setError('')
    try{
      const response = await fetch(url)
      const houses = await response.json()
      const houseInfos = houses
      setHouses(houseInfos)
    }catch(error){
      setError(error.message)
    }
  }
  
  useEffect (() => {
    getSpells()
    getHouses()
  },[])
  
  return (
    <main className='App'>
    <Route path={"/"}>
      

    </Route>
    


      <Display spells={spells}/>
    </main>
    
  )
}

export default App;
