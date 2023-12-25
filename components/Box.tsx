import Image from "next/image"
import { useState } from "react"
import Bul from './Bul'
import Fan from './Fan'
export default function Page() {


    
    return (
        <>
            <div className="bg-slate-400 lg:w-[30%] z-30
                            w-full h-auto
                            flex-col mr-24
            "> 
                <Bul />
                <Fan />   
            </div>
        </>
    )
  }