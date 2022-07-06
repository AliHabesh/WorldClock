import { useEffect, useState } from "react"
import React  from 'react'

const CountryDataForm = (props) => {
  // console.log(JSON.stringify(props.countryData[0])+" Holla seniore");
   //console.log(JSON.stringify(props.countryData[0].flags.svg)+" Holla seniore 2");

    const [countryFlag, setCountryFlag] = useState();
    const [region, setRegion] = useState();
    const [capital, setCapital] = useState();
    const [currency, setCurrency] = useState();
    const [population, setPopulation] = useState();
    const [size, setSize] = useState();
    const [coatOfArms, setCoatOfArms] = useState();


   /*  useEffect(() => {
    setCountryFlag(props.countryData[0].flag);
      setRegion(props.countryData[0].region);
      setCapital(props.countryData[0].capital);
     // setCurrency(props.countryData[0].currencies);
      setPopulation(props.countryData[0].population);
      setSize(props.countryData[0].area);
    }, [props.countryData])
    */
    
    //TODO: Fix 

  return (
    <div className='bg-white ml-10 rounded-xl shadow-2xl h-full w-128 flex flex-row'>
       
  <div class="flex w-[600px] rounded-lg bg-white p-8">
    <div class="w-1/2 pl-6 pt-10">
      <ul class="space-y-4">
        <li><span class="font-bold">Region:</span> {region}</li>
        <li><span class="font-bold">Capital:</span> {capital}</li>
        <li><span class="font-bold">Currency:</span> {currency}</li>
        <li><span class="font-bold">Population:</span> {population}</li>
        <li><span class="font-bold">Size:</span> {size}</li>
      </ul>
    </div>

    <div class="w-1/2">
      <ul class="space-y-4 pt-10 pl-20">
        <li><span class="font-bold">Country Flag:</span> {countryFlag}</li>
        <li><span class="font-bold">Coat of Arms:</span> {coatOfArms}</li>
       
      </ul>
    </div>
  </div>

    </div>
  )
}

export default CountryDataForm