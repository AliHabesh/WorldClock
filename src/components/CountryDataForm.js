import { useEffect, useState } from "react"
import React  from 'react'

const CountryDataForm = (props) => {
 
  return (
    <div className='bg-white ml-10 rounded-xl shadow-2xl h-full w-128 flex flex-row'>
       
  <div class="flex w-[600px] rounded-lg bg-white p-8">
    <div class="w-1/2 pl-6 pt-10">
      <ul class="space-y-4">
        <li><span class="font-bold">Region:</span> {props.countryData?.[0].region}</li>
        <li><span class="font-bold">Capital:</span> {props.countryData?.[0].capital}</li>
        <li><span class="font-bold">Currency:</span> {props.countryData && Object.values(props.countryData?.[0].currencies)[0].name}</li>
        <li><span class="font-bold">Population:</span> {props.countryData?.[0].population}</li>
        <li><span class="font-bold">Size:</span> {props.countryData?.[0].area} km²</li>
      </ul>
    </div>

    <div class="w-1/2">
      <ul class="space-y-4 pt-10 pl-20">
        <li><span class="font-bold">Country Flag:</span> {props.countryData?.[0].flag}</li>
        <li><span class="font-bold">Coat of Arms:</span> <img className="h-10 align-top" src={props.countryData?.[0].coatOfArms.png}/></li>
       
      </ul>
    </div>
  </div>

    </div>
  )
}

export default CountryDataForm