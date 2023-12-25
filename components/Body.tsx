
import { useState, useEffect } from 'react';
import Chart from './Chart'
import BoxS2 from '@/components/Box1'
import sun from '@/public/img/sun.png'
import hot from '@/public/img/hot.png'
import humidity from '@/public/img/humidity.png'
import BoxS1 from '@/components/Box'
import axios from "axios"
import { baseURL } from "@/components/until"

interface obj{
  Time:String,
  ND:Number,
  DA:Number,
  AS:Number
}
export default function Page() {

  const [data,setData] = useState<any>([])
  const [temp,setTemp] = useState(50)
  const [light,setLight] = useState()
  const [humi,setHumi] = useState()
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/`).then(
            res => { setData(res?.data); }
        ).catch(
            error => console.log(error)
        )
        axios.get(`${baseURL}/api/sensordata/temp`).then(
          res => { setTemp((res?.data[0].temp)); }
      ).catch(
          error => console.log(error)
      )
      axios.get(`${baseURL}/api/sensordata/light`).then(
        res => { setLight(res?.data[0].light); }
    ).catch(
        error => console.log(error)
    )
    axios.get(`${baseURL}/api/sensordata/humi`).then(
      res => { setHumi(res?.data[0].humi); }
  ).catch(
      error => console.log(error)
  )
  },[data])
  
  return (
    <>
      <div className="bg-slate-50 flex w-full">
        <div className=' w-full flex flex-col
                              m-10
              '>
          <div className='w-full flex flex-row'>
            
                      <BoxS2 field='ND' value={temp} uniqe=' &deg;' image={hot} color='#FF0000' animate='animate-chan-red'/>
                      <BoxS2 field='DA' value={humi} uniqe=' %' image={humidity} color='#00FFFF'animate='animate-chan-blue'/>
                      <BoxS2 field='AS' value={light} uniqe=' lux' image={sun} color='#FFFF00' animate='animate-chan-light'/>
          
            
            
          </div>

          
          <div className='w-full justify-center flex mb-5'>
            <Chart data={data}/>
            <BoxS1 />
          </div>
         
        </div>
      </div>
    </>
  )
}