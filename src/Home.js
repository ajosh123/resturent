import React, { useEffect, useState } from 'react'

import Crad from './Crad';
import { useDispatch, useSelector } from 'react-redux';
import { getResaturants } from './actions/restAction';


function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getResaturants)
  },[])
  //to set store
  const restaurants=useSelector(state=>state. restReducer.restLis) 
  return (
    <div>
       
       <Crad data={restaurants}></Crad>
        
    </div>
  )
}

export default Home