
import BodyS1 from '@/components/Body'
import BoxS1 from '@/components/Box'
import NavbarS1 from '@/components/Navbar'

import React,{ Children, ReactNode, useState } from 'react';
interface Props {
    children?: ReactNode
    // any props that come into the component
}
export default function Page({children} :Props) {
    const [check,setCheck] =useState(true)

    const handleClick = () =>{
        setCheck(!check)
        
    }
    return(
        <>
             <header>
                <nav className="bg-black border-gray-200 px-2 py-2.5">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <div className="flex items-center">
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={handleClick}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <a href="#" className="ml-2 flex items-center">
                                
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PTIT-IOT</span>
                            </a>
                        </div>


                        <div className=" md:justify-between items-center flex md:w-auto lg:order-2" id="mobile-menu-2">
                            <ul className="flex lg:mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li className="hidden sm:flex">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                            </svg>
                                        
                                        <div className="ml-2 mb-2">
                                            <a href="#" className="flex  pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Vũ Hoàng Anh B20DCCN079</a>
                                        </div>   
                                </li>
                                {/* <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='flex flex-row '>
                <NavbarS1 station={check} action={handleClick}/>
                {
                    children
                }
                
            </div>
            
         
        </>
    )
  }