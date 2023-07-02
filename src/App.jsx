import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineUserAdd } from "react-icons/ai"
import Table from './Components/Table';
import { addUser, editUser } from './Redux/UserSlice';


const App = () => {

  const selector = useSelector((state) => state.users.value);
  const dispatch = useDispatch()

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [city, setCity] = useState("")
  const [role, setRole] = useState("")
  const [editDetails, setEditDetails] = useState(false)
  const [newData, setNewData] = useState([])

  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState()
  const [newCity, setNewCity] = useState()
  const [newRole, setNewRole] = useState()


  const handleNewUser = (tfData) => {
    if (tfData) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
    setEditDetails(false)
  }

  const handleEditUser = (editData) => {
    // window.alert(editData)
    setShowForm(true)
    setEditDetails(true)
    setNewData(selector.filter((item) => editData == item.id))


  }


  return (
    <div className=' border flex flex-col justify-center items-center '>

      <h1 className='bg-[linear-gradient(_33.2deg,rgba(157,147,247,1)_30.2%,rgba(117,176,247,1)_61.4%_)] w-1/2 h-[7%]  flex justify-center items-center text-2xl text-white '>CRUD Using React and Redux</h1>

      <div className='w-1/2 border  flex flex-col justify-center items-center '>
        {!showForm ? <button onClick={() => handleNewUser(true)} type="button" class="flex items-center gap-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5"> <span className='text-xl'><AiOutlineUserAdd /></span> Create New User </button> : <button type="button" onClick={() => handleNewUser(false)} class="flex items-center gap-3 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5">Cancel</button>}
        {/* <button type="button" class="flex items-center gap-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5"> <span className='text-xl'><AiOutlineUserAdd /></span> Create New User </button> */}



        {showForm && <div className='w-1/2 '>
          {editDetails ? <>
            {newData && newData.map((item) => (
              <>

                <div class="mb-2">
                  <label for="full-name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter Fullname</label>
                  <input type="text" id="full-name" value={newName ? newName : item.name} onChange={(event) => { setNewName(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <h1> {newName} {newAge} </h1>
                <div class="mb-2">
                  <label for="age" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter Age</label>
                  <input type="number" id="age" value={newAge ? newAge : item.age} onChange={(event) => { setNewAge(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-2">
                  <label for="city" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter City Name</label>
                  <input type="text" id="city" value={newCity ? newCity : item.city} onChange={(event) => { setNewCity(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-2">
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                  <select id="countries" value={newRole ? newRole : item.role.toLowerCase()} onChange={(event) => setNewRole(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value=''>Choose Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>

                  </select>
                </div>
                <div className='flex justify-center items-center'>
                  <button onClick={() => { dispatch(editUser({ id: item.id, name: newName ? newName : item.name, age: newAge ? newAge : item.age, city: newCity ? newCity : item.city, role: newRole ? newRole : item.role }), setShowForm(false), setName(""), setAge(), setCity(""), setRole("")) }} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit Data
                    </span>
                  </button>

                </div>
              </>
            ))}
          </> : <>
            <div class="mb-2">
              <label for="full-name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter Fullname</label>
              <input type="text" id="full-name" value={name} onChange={(event) => { setName(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div class="mb-2">
              <label for="age" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter Age</label>
              <input type="number" id="age" value={age} onChange={(event) => { setAge(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-2">
              <label for="city" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter City Name</label>
              <input type="text" id="city" value={city} onChange={(event) => { setCity(event.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-2">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select id="countries" value={role} onChange={(event) => setRole(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value=''>Choose Your Role</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>

              </select>
            </div>
            <div className='flex justify-center items-center'>
              <button onClick={() => { dispatch(addUser({ id: selector.length > 0 ? selector[selector.length - 1].id + 1 : 1, name, age, city, role }), setShowForm(false), setName(""), setAge(), setCity(""), setRole("")) }} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Add Data
                </span>
              </button>

            </div>
          </>}

        </div>}

      </div>
      <Table data={selector} handleEditUser={handleEditUser} />



    </div>
  )
}

export default App