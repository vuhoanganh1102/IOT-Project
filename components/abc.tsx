
import {useEffect, useLayoutEffect, useState} from 'react'

export default function Abc () {
    const [colorNum,setColorNum] = useState(200)
    
    useEffect(()=>{
        setInterval(()=>{
            setColorNum(colorNum + 100)
            console.log('check')
        },5000)
            
    },[])
   
    return(
        <>
            <ul className="flex flex-row">
                <li className={`${"w-11 border border-solid border-black mr-1 bg-red-"}${colorNum}`}>aaa</li>
            </ul>
            <button >click mee !!</button>
        </>
    )
}