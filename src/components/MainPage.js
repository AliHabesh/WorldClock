import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Clocks from 'react-clock'
import 'react-clock/dist/Clock.css';
import CountryDataForm from './CountryDataForm';
import { utcToZonedTime } from 'date-fns-tz'



const MainPage = () => {

    const [countryData, setCountryData] = useState();
    const [time, setTime] = useState(new Date());
    const [value, setValue] = useState();

   

    useEffect(() => {
      const interval = setInterval(() => {
        if(countryData){
          let continent = countryData[0].continents[0];
          let city = countryData[0].capital[0];
    
          if(continent === "South America" || continent === "North America"){
            continent = "America";
          }

         if(city === 'Tirana'){
          city = 'Tirane';
         }

          const date = utcToZonedTime(new Date(), continent+"/"+city.replace(/ /g,"_"));
          setValue(date);
        }else{
          setValue(new Date())
        }
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }, [countryData]);

    const handleChange = (e) => {
        const countryCode = e.target.value;
        
        axios.get('https://restcountries.com/v3.1/alpha/'+countryCode).then(response => {
          setCountryData(response.data);

         const timeZone = {
          continent: response.data[0].continents[0],
          city: response.data[0].capital[0]
         }
       

         if(timeZone !== undefined || timeZone !== ""){
          let val;
          if(timeZone.continent === "South America" || timeZone.continent === "North America"){
          val = "America";
           }else{
            val = timeZone.continent;
          }

          if(timeZone.city === 'Tirana'){
            timeZone.city = 'Tirane';
          }

          console.log(val+"/"+timeZone?.city.replace(/ /g,"_"));
          const date = utcToZonedTime(new Date(), val+"/"+timeZone?.city.replace(/ /g,"_"));
         // const date = utcToZonedTime(new Date(), 'Asia/Kabul');

        
          console.log(date);
          setValue(date);
          }
            })

   }

  return (
    
    <div className='flex flex-col items-center justify-center'>
   
   
    <select onChange={handleChange}  id="countries" className="w-128 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-28 ">
  <option selected>Choose a country</option>
  <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AO">Angola</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BD">Bangladesh</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BJ">Benin</option>
    <option value="BT">Bhutan</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="KH">Cambodia</option>
    <option value="CF">Central African Republic</option>
    <option value="CL">Chile</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DO">Dominican Republic</option>
    <option value="EG">Egypt</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GN">Guinea</option>
    <option value="HT">Haiti</option>
    <option value="HN">Honduras</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IT">Italy</option>
    <option value="JP">Japan</option>
    <option value="JO">Jordan</option>
    <option value="KE">Kenya</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MY">Malaysia</option>
    <option value="ML">Mali</option>
    <option value="MR">Mauritania</option>
    <option value="MX">Mexico</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MZ">Mozambique</option>
    <option value="NA">Namibia</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="MF">Saint Martin</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SO">Somalia</option>
    <option value="ES">Spain</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TH">Thailand</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TM">Turkmenistan</option>
    <option value="UG">Uganda</option>
    <option value="GB">United Kingdom</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VE">Venezuela</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>

    <div className='flex flex-row pt-16'>
    <div className='bg-white rounded-full shadow-2xl'>
          <Clocks value={value} size={350} hourHandWidth={10}  hourMarksLength={14} minuteMarksLength={14} minuteHandWidth={4} renderMinuteMarks={false} renderNumbers={true}  className='shadow-2xl'/>
        </div>
    <CountryDataForm countryData={countryData}/>
    </div>
    
        
   </div>
  )
}

export default MainPage