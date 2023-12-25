
import Image from "next/image"
import { Line, Circle } from 'rc-progress';
import { useEffect, useLayoutEffect, useState } from 'react'
export default function Page(props : any) {
    
    return(
        <div className={`${'flex flex-row m-2  border p-2 items-center h-52 w-[30%] border-black justify-center'} ${props.animate} `}>
            <Image  src={props.image} alt="hinhanh" width={100}/>
            <div className="ml-5">{props.title}</div>
            <div className="w-16"><Circle percent={props.value} strokeWidth={10} strokeColor={props.color} /></div>
            
            <div className="ml-5">{props.value}</div>
            <div> {props.uniqe}</div>
            
        </div>
    )
}