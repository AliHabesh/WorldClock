import React, { useEffect, useState } from 'react';
import Clocks from 'react-clock'
import 'react-clock/dist/Clock.css';


const Clock = () => {
      const [value, setValue] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
      return (
        <div className='bg-white rounded-full shadow-2xl'>
          <Clocks value={value} size={350} hourHandWidth={10}  hourMarksLength={14} minuteMarksLength={14} minuteHandWidth={4} renderMinuteMarks={false} renderNumbers={true}  className='shadow-2xl'/>
        </div>
      );
    }


export default Clock