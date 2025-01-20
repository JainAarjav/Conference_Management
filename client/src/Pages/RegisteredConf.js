import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const RegisteredConf = () => {

    const [email,setEmail] = useState("")
    const [confList,setConfList] = useState([]);
  
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('user'));
        setEmail(items.email)
        console.log(email)

        axios.get(`http://localhost:8000/api/get_reg/${email}/`)
        .then(response => {
          console.log(response.data)
          setConfList(response.data)
        })
        .catch(error => {
        console.log(error);
       });
    
       }, [email])

  return (
    <div className='bg-blue-300 h-screen p-3'>
    <div className='text-white font-bold text-3xl'>Registered Conferences </div>
    <div className='border border-white rounded-md mt-10 p-5 font-bold h-3/4'>
        <div className='flex flex-row justify-evenly'>
            <div className='w-24'>Conf_id</div>
            <div className='w-24'>Org_Name</div>
        </div>
        {confList.map((conf) => (
         (
          <div className='flex flex-row justify-evenly bg-slate-500 pt-2 mt-5 rounded-md'>
            <div className='w-24'>{conf.conf_id}</div>
            <div className='w-24'>{conf.org_name}</div>
        </div>
         )
        ))}

     </div>
    </div>
  )
}

export default RegisteredConf