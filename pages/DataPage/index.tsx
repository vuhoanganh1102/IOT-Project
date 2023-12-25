

import axios from "axios"
import { useState, useEffect } from "react"
import { baseURL } from "@/components/until"


export default function Page() {
    const [data,setData] = useState<any>([])
    useEffect(()=>{
        axios.get(`${baseURL}/api/sensordata/`).then(
            res => { setData(res?.data); }
        ).catch(
            error => console.log(error)
        )
    },[])
    console.log(data)
    return (
        <>

            <div className='w-full flex justify-center '>
                <div className="relative overflow-x-auto mt-20">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                            <th scope="col" className="px-6 py-3">
                                    Stt
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ND
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DA
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    AS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 data?.map((item :any, index : number)=>(
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.time}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.temp}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.humi}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.light}
                                        </td>
                                    </tr>
                                 ))
                            }
                            
                        </tbody>
                    </table>
                    
                </div>
            </div>
            

        </>
    )
}