import axios from 'axios';
import React, { useState } from 'react'
import Clock from './Clock'




const MainPage = (props) => {

    const [countryData, setCountryData] = useState('FR');
 

    const handleChange = (e) => {
        const countryCode = e.target.value;
        
       
        
        axios.get('https://restcountries.com/v3.1/alpha/'+countryCode).then(response => {
          
           setCountryData(response.data);
           console.log("TESTIN 1010: "+response.data)
          
        }).catch(error => {
            console.log(error);
        })


   }




  return (
    <div className='w-full h-full flex flex-col'>
    <h1 className='text-white text-8xl font-semibold pt-5'>World Clock</h1>
 

    <div className='flex flex-row pt-20 pl-96'>
    <Clock />
   
    </div>
    
        
   </div>
  )
}

export default MainPage