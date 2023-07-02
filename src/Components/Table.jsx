import React from 'react'
import { deleteUser } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'


const Table = ({ data, handleEditUser }) => {
    const dispatch = useDispatch()

    const handleEditUserFunction = (data) => {
        handleEditUser(data)
    }

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 my-3">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Fullname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                            City
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td class="px-6 py-4">
                                {item.age}
                            </td>
                            <td class="px-6 py-4">
                                {item.city}
                            </td>
                            <td class="px-6 py-4">
                                {item.role}
                            </td>
                            <td class="px-6 py-4">

                                <button onClick={() => { handleEditUserFunction(item.id) }} className='font-medium text-blue-600 dark:text-blue-500 hover:text-green-900'>Edit</button>
                                <button onClick={() => { dispatch(deleteUser({ id: item.id })) }} className='font-medium text-blue-600 dark:text-blue-500 hover:text-red-600 ml-3'>Delete</button>

                            </td>
                        </tr>
                    ))}





                </tbody>
            </table >
        </div >

    )
}

export default Table