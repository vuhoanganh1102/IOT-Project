import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useState } from 'react'



export default function Page(props: any) {

    const [arrayTime, setArrayTime] = useState([])


    return (
        <div className='flex flex-col mr-40 justify-center'>
            <div className='border-b-black w-full flex font-bold text-4xl bg-blue-300 justify-center mb-5'>
                Chart
            </div>
            <LineChart width={700} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                <Line type="monotone" dataKey="temp" stroke="#FF0000" />
                <Line type="monotone" dataKey="humi" stroke="#33FFFF" />
                <Line type="monotone" dataKey="light" stroke="#FFB266" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="Time" />
                <YAxis />
                <Tooltip />

            </LineChart>
        </div>

    )
}