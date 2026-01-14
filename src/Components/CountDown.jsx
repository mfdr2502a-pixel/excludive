import React from 'react'
import { countDownDateAndTime } from 'countdown-date-time';    

const CountDown = () => {

    const conduct_date = '2025-12-31 16:54:00';

    
    const interval = setInterval(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        console.log(countDown)
    }
    ,1000)


  return (
    <div>CountDown</div>
  )
}

export default CountDown