import React, { useEffect, useState } from 'react'

import Table from './Table'
import "./dashboard.css"
import Axios from 'axios'
import Tables from './Tables'
import { makeRequest } from '../axios'

function Dashboard() {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)

  const [query,setQuery]=useState("")


  useEffect(()=>{
    makeRequest.get(`/`,{params:{
  page:page,
  search:query
}}).then((res)=>{
  if(res.data.err){
console.log(res.data.err);
  }else{
    console.log(res.data);
    setData(res.data.data)
  }
})
  },[page,query])
  return (
   <>
   <h2 className='title'>Users</h2>
      <input type="text" className='search' placeholder='search... ' onChange={(e)=>setQuery(e.target.value)}></input>
      <div class="dropdown">

</div>
    <Tables value={data}/>
    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item ">
      <span class="page-link" style={{cursor:"pointer"}} onClick={(e)=>{setPage(page-1)}}>Previous</span>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link" style={{cursor:"pointer"}} onClick={(e)=>{setPage(page)}}>{page}</span>
    </li>
    <li class="page-item">
      <span class="page-link " style={{cursor:"pointer"}} onClick={(e)=>{setPage(page+1)}}>Next</span>
    </li>
  </ul>
</nav>
   </>
  )
}

export default Dashboard