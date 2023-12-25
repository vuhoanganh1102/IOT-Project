
import Link from "next/link"
import data from '@/public/img/database.png'
import Image from "next/image"
export default function Page(props: any) {

    return (
        <div className={`${"bg-slate-600 h-auto block transiton duration-500 ease-in-out "} ${props.station ? 'w-16' : 'w-60 z-50'}`}>
            {
                props.station ?
                    (
                        <ul className="flex flex-col">
                            <li className="text-white  text-center font-medium  py-2 hover:bg-slate-800" >
                                <div className="mx-4 my-2">
                                    <Link href='/'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                    </Link>

                                </div>

                            </li>
                            <li className="text-white  text-center font-medium  py-2 hover:bg-slate-800">
                                <div className="mx-4 my-2">
                                    <Link href='/AboutMe'>

                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                        </svg>
                                    </Link>

                                </div>

                            </li>
                            <li className="text-white  text-center font-medium  py-2 hover:bg-slate-800">
                                <div className="mx-4 my-2">
                                    <Link href='/DataPage'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0H2Zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 0H7v16h6V0Z" />
                                        </svg>
                                    </Link>

                                </div>
                            </li>
                            <li className="text-white  text-center font-medium  py-2 hover:bg-slate-800">
                                <div className="mx-4 my-2">
                                    <Link href='/Actions'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M4.09 7.586A1 1 0 0 1 5 7h13V6a2 2 0 0 0-2-2h-4.557L9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v14c.001.154.02.308.058.457L4.09 7.586Z" />
                                            <path d="M6.05 9 2 17.952c.14.031.281.047.424.048h12.95a.992.992 0 0 0 .909-.594L20 9H6.05Z" />
                                        </svg>
                                    </Link>

                                </div>
                            </li>
                        </ul>
                    )
                    :
                    (<ul className="flex flex-col">
                        <li className="text-white mx-5 my-2 text-center font-medium border py-2 hover:bg-slate-800" onClick={props.action}>
                            <Link href='/'>Home</Link>

                        </li>
                        <li className="text-white mx-5 my-2 text-center font-medium border py-2 hover:bg-slate-800" onClick={props.action}>
                            <Link href='/AboutMe'>About me</Link>

                        </li>
                        <li className="text-white mx-5 my-2 text-center font-medium border py-2 hover:bg-slate-800" onClick={props.action}>
                            <Link href='/DataPage'>Data</Link>
                        </li>
                        <li className="text-white mx-5 my-2 text-center font-medium border py-2 hover:bg-slate-800" onClick={props.action}>
                            <Link href='/Actions'>Actions</Link>
                        </li>
                    </ul>)


            }
        </div>
    )
}