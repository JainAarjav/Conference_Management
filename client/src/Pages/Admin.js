
import React from 'react'
import { useState,useEffect } from 'react'

import axios from 'axios'
import toast from 'react-hot-toast'

const Admin = () => {

    const [org_name,setOrgName] = useState("")

    const [orgList,setOrgList] = useState([]);

    const [selectedOrg,setSelectedOrg] = useState("");

    const [startDate,setStartDate] =  useState(new Date());
    const [endDate,setEndDate] =  useState(new Date());
    const [venue,setVenue] = useState("");
    const [topic,setTopic] = useState("")

     useEffect(() => {
          axios.get('http://localhost:8000/api/get_org/')
          .then(response => {
            console.log(response.data)
            setOrgList(response.data)
            setSelectedOrg(response.data[0].org_id)
          })
          .catch(error => {
          console.log(error);
        });
      
     }, [])

    const handleSubmitOrgn = async (e) => {
        e.preventDefault();

         axios.post('http://localhost:8000/api/add_org/',{
           org_name:org_name

         })
           .then(response => {
             console.log(response)
             toast.success('Organization Added')
           })
           .catch(error => {
             console.log(error);
           });
    
      }

  const handleSubmitConf = async(e) => {
      e.preventDefault();

      console.log(selectedOrg)
      console.log(startDate)
      console.log(endDate)
      console.log(venue)
      console.log(topic)
      
      axios.post('http://localhost:8000/api/add_conf/',{
        org_id :selectedOrg,
        startDate : startDate,
        endDate : endDate,
        venue: venue,
        topic : topic,

      })
        .then(response => {
          console.log(response)
          toast.success('Conference Added')
        })
        .catch(error => {
          console.log(error);
        });

  }
    
  return (
    <div className='bg-blue-300 p-8 font-sans h-full'>
        <div className='text-white font-bold text-3xl'>Admin</div>
        <div className="flex flex-col mt-10">
        <div className="space-y-7 bg-gray-800 rounded-lg p-16">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-400 md:text-2xl">
            Add Organization
          </h1>
          <form onSubmit={handleSubmitOrgn} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="subjCode" className="mr-2 font-bold text-white">
                Organization Name :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5"
                required
                id="subjCode"
                name="subjCode"
                value={org_name}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center"
            >
              Add Organization
            </button>
            </form>

        </div>
        <div className="space-y-7 bg-gray-800 rounded-lg p-10 mt-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-400 md:text-2xl">
            Add Conferences
          </h1>
          <form onSubmit={handleSubmitConf} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="subjCode" className="mr-2 font-bold text-white">
                Select Organization :
              </label>
              <select id="org" className="w-1/2 text-lg" onChange={(e) => setSelectedOrg(e.target.value)}>
              {
                orgList.map((org) => (
                  <option className="w-1/2 text-lg" value={org.org_id}>{org.org_name}</option>
                ))
              }
            </select>
            </div>
            <div>
              <label htmlFor="password" className="mr-2 font-bold text-white">
                Start Date :
              </label>
              <input type="date" onChange={(e) => setStartDate(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="password" className="mr-2 font-bold text-white">
                End Date :
              </label>
              <input type="date" onChange={(e) => setEndDate(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="subjCode" className="mr-2 font-bold text-white">
                Venue :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5"
                required
                id="subjCode"
                name="subjCode"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="subjCode" className="mr-2 font-bold text-white">
                Topic :
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5"
                required
                id="subjCode"
                name="subjCode"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center"
            >
              Add Conference
            </button>
            </form>

        </div>
        </div>
    </div>
  )
}

export default Admin