
import Image from "next/image"
import user from '@/public/img/user2.png'
import TrRow from '@/components/TrRow'

export default function Page() {
    return (
        <div className="bg-slate-400 sm:w-full flex lg:flex-row flex-col">
            <div className="bg-white lg:w-40">
                <Image src={user} width={80} height={80} className="sm:mt-10 sm:ml-10 m-2" alt="user" />
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Field
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Value
                            </th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Họ và tên
                            </th>
                            <td className="px-6 py-4">
                                Vũ Hoàng Anh
                            </td>
                          
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                MSV
                            </th>
                            <td className="px-6 py-4">
                                B20DCCN079
                            </td>
                           
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Môn học
                            </th>
                            <td className="px-6 py-4">
                                IoT và ứng dụng
                            </td>
                            
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Email
                            </th>
                            <td className="px-6 py-4">
                                AnhVH.B20CN079@stu.ptit.edu.vn
                            </td>
                            
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Lớp
                            </th>
                            <td className="px-6 py-4">
                                D20HTTT2
                            </td>
                        </tr>
                        <TrRow Field='Ngành' Value='Hệ thống thông tin'/>
                        <TrRow Field='Nơi sinh' Value='Thái Bình'/>
                    </tbody>
                </table>
            </div>
        </div>

    )
}