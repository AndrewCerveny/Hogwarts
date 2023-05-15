import React from "react";
import { useState, useEffect } from "react";
import { cleaningHouse } from '../../util/cleaning'
import HouseDisplay from "../HouseDisplay/HouseDisplay";
import './HouseHub.css'

const HouseHub = () => {
  const [houseDetails , setHouseDetails] = useState([])
  const [error, setError] = useState('')

const getHouseDeeds = async () => {
        const url = 'https://wizard-world-api.herokuapp.com/Houses'
        setError('')

        try {
            const response = await fetch(url)
            const houseDeeds = await response.json()
            const houseInfo = cleaningHouse(houseDeeds)
            setHouseDetails(houseInfo)

        }catch(error){
            setError(error.message)
        }
    }

    useEffect (() => {
        getHouseDeeds()
    },[])

    return(
      <section>
        <HouseDisplay houses={houseDetails}/>
      </section>
    )

}
export default HouseHub; 