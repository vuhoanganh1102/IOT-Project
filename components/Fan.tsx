

import { useEffect, useState } from "react"
import fanoff from '@/public/img/fanoff.png'
import fanon from '@/public/img/fanon.gif'
import Image from "next/image"
import off from '@/public/img/switch-off.png'
import on from '@/public/img/switch-on.png'
import io from 'socket.io-client';
import axios from "axios"
import { baseURL } from "./until"
export default function Page(props: any) {
    const [fan, setFan] = useState(true)

    const endpoint = 'http://localhost:8688';
    const socket = io(endpoint)
    const handleLed = () => {
        
        if(fan){
            socket.emit('control_relay_2','0')
            setFan(!fan)
            setCountFan(countFan + 1)
        }
        else{
            socket.emit('control_relay_2','1')
            setFan(!fan)
            setCountFan(countFan + 1)
        }
    }
    useEffect(()=>{
        
    },[])
    const [countFan,setCountFan] = useState(0)
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/countFAN`).then(
            res=>setCountFan(res?.data[0].countFAN)
        ).catch(
            error => console.log(error)
        )
    },[])
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/maxFAN`).then(
            res=>{setFan(res?.data[0].MaxFAN === 1 ? true : false); console.log(res?.data[0].MaxFAN)}
        ).catch(
            error => console.log(error)
        )
        
    },[])
    return (
        <>
            <div className="flex flex-col m-2  border p-2 h-52 justify-center">
                <div className="flex justify-center">   
                    <Image src={fan ? fanon : fanoff} width={60} height={60} alt='nong den' />

                </div>
                
                <div className='flex justify-center mt-2'>
                    <Image src = {fan ? on : off} width={60} height={20} alt='onoff' onClick={handleLed}/>
                </div>
                <div className='flex justify-center'>
                    <h4>Số lần bật tắt quạt: {countFan}</h4>
                </div>
            </div>
        </>
    )
}