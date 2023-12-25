


export default function Page(props: any) {
   
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.Field}
            </th>
            <td className="px-6 py-4">
                {props.Value}
            </td>

        </tr>
    )
}