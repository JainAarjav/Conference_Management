import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import toast from 'react-hot-toast'

const Dashboard = () => {

   const [username, setUserName] = useState("")
   const [email,setEmail] = useState("")
   const [orgList,setOrgList] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    setUserName(items.name)
    setEmail(items.email)

      axios.get('http://localhost:8000/api/get_org/')
          .then(response => {
            console.log(response.data)
            setOrgList(response.data)
          })
          .catch(error => {
          console.log(error);
         });

  }, [])
  
  return (
    <div className='bg-blue-300 h-screen p-3'>
     <div className='text-white font-bold text-3xl'>Dashboard</div>
     <div className='text-white font-bold text-xl'>Hello {username}</div>
     <div className='text-white font-bold text-xl'>Email: {email}</div>  
     <div className='mt-10'>
     <Link to='/reg_conf' className='p-5 rounded-md bg-slate-400 font-bold text-lg'>See Registered Conferences</Link>
     </div>
     <div className='border border-white rounded-md mt-10 p-5 font-bold h-3/4'>
      Organizations
        {orgList.map((org) => (
          <DashCard data={org} />
        ))}
     </div>
      

    
    </div>
  )
}

export default Dashboard



const DashCard = (props) => {
  const org_id = props.data.org_id 
  const org_name = props.data.org_name
  return(
    <Link to={`/conf/${org_name}-${org_id}`} >
    <div className='p-6 font-bold space-y-4 bg-slate-300 rounded-md mt-5'>
          Name:{props.data.org_name}<br></br>
          Id:{props.data.org_id}
    </div>
    </Link>
  )
}
