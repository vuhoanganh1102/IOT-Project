import Image from "next/image"
import bulon from '@/public/img/pic_bulbon.gif'
import buloff from '@/public/img/pic_bulboff.gif'
import { useEffect, useState } from 'react'
import off from '@/public/img/switch-off.png'
import on from '@/public/img/switch-on.png'
import io from 'socket.io-client';
import axios from "axios"
import { baseURL } from "./until"
import { error } from "console"
export default function Page(props: any) {
    const [led, setLed] = useState(true)

    const ENDPOINT = 'http://localhost:8688';

    const socket = io(ENDPOINT);

    const handleLed = () => {

        if (led) {// Khi component được mount, gửi sự kiện 'control_relay_1' tới server Socket.IO
            // socket.emit('connection','control_relay_1')
            socket.emit('control_relay_1','0'); // Gửi state1 là '1'
            setLed(!led)
            console.log('check')
            // Lưu ý: Đừng quên dọn sạch kết nối khi component unmount hoặc không cần thiết nữa.
            setCountLed(countLed+1)

        }
        else {// Khi component được mount, gửi sự kiện 'control_relay_1' tới server Socket.IO
            socket.emit('control_relay_1', '1'); // Gửi state1 là '1'
            setLed(!led)
            // Lắng nghe sự kiện 'relay_status' từ server Socket.IO
            console.log('check1')

            // Lưu ý: Đừng quên dọn sạch kết nối khi component unmount hoặc không cần thiết nữa.
            setCountLed(countLed+1)
        }
        return () => {
            socket.disconnect();
        };

    }
    const [countLed,setCountLed] = useState(0)
    
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/countLED`).then(
            res=>setCountLed(res?.data[0].countLED)
        ).catch(
            error => console.log(error)
        )
        
    },[])
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/maxLED`).then(
            res=>setLed(res?.data[0].MaxLED === 1 ? true : false)
        ).catch(
            error => console.log(error)
        )
        
    },[])
    console.log(led)
    return (
        <>
            <div className="flex flex-col m-2  border p-2 h-52 justify-center ">
                <div className="flex justify-center">
                    <Image src={led ? bulon : buloff} width={60} height={60} alt='nong den' />
                </div>

                <div className='flex justify-center mt-2'>
                    <Image src={led ? on : off} width={60} height={20} alt='onoff' onClick={handleLed} />
                </div>
                <div className='flex justify-center'>
                    <h4>Số lần bật tắt đèn: {countLed}</h4>
                </div>
            </div>
        </>
    )
}