import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import toast from 'react-hot-toast';

import axios from 'axios';

const Conferences = () => {

    let location = useLocation();
    let pathname = location.pathname
    console.log(pathname)
    let org_name = pathname.substring(6,pathname.indexOf('-'))
    let org_id = pathname.substring(pathname.indexOf('-')+1,pathname.length);
    console.log(org_id)

    const [confList,setConfList] = useState([])

    const [email,setEmail] = useState("")
  
    useEffect(() => {

      const items = JSON.parse(localStorage.getItem('user'));
      setEmail(items.email)

        axios.get(`http://localhost:8000/api/get_conf/${org_id}`)
        .then(response => {
          console.log(response.data)
          setConfList(response.data)
        })
        .catch(error => {
        console.log(error);
       });
    
       }, [])

       const registerConf = (conf_id) => {
        console.log(conf_id);
        console.log(email)
        console.log(org_name)
        console.log(org_id)
        axios.post('http://localhost:8000/api/reg_conf/',{
          conf_id : conf_id,
          email: email,
          org_name : org_name,
          org_id : org_id,
        })
          .then(response => {
            if(response.status === 201)
            {
                toast.success('Registered!')
            }
          })
          .catch(error => {
            toast.error('Invalid Registration!')
            console.log(error);
          });
    
      }

  return (
    <div className='bg-blue-300 h-screen p-5'>
    <div className='text-white text-3xl font-bold'>Conferences</div> 
    <div className='text-white text-3xl font-bold'>{org_name}</div>   
    <div className='border border-white rounded-md mt-10 p-10 font-bold h-3/4'>
    <div className='flex flex-row justify-evenly'>
        <div className='w-24'>Topic</div>
        <div className='w-24'>Venue</div>
        <div className='w-24'>startDate</div>
        <div className='w-24'>endDate</div>
        <div className='w-24'>Register</div>
    </div>
    {confList.map((conf) => (
         (
          <div className='flex flex-row justify-evenly bg-slate-500 pt-2 mt-5 rounded-md'>
            <div className='w-24'>{conf.topic}</div>
            <div className='w-24'>{conf.venue}</div>
            <div className='w-24'>{conf.startDate}</div>
            <div className='w-24'>{conf.endDate}</div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={(e) => registerConf(conf.conf_id)}>Register</button>
        </div>
         )
        ))}

    </div>
        
    </div>
  )
}

export default Conferences