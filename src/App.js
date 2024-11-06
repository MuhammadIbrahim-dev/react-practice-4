import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[istatus,setistatus]=useState(false)
  let[menuStatus,setmenuStatus]=useState(false)

  return (
    <div className='App'>
    <button className='micon' onClick={()=>setmenuStatus(!menuStatus)}>
      {
      menuStatus ? <span className='cross'>&times;</span> : <span> &#9776; </span>}</button>
    <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
    <ul>
      <li  onClick={()=>setmenuStatus()}>Home</li>  
      <li onClick={()=>setmenuStatus()}>about</li> 
      <li onClick={()=>setmenuStatus()}>Blog</li> 
      <li  onClick={()=>setmenuStatus()}>contact</li> 
      <li onClick={()=>setmenuStatus()}>projects</li> 
      <li onClick={()=>setmenuStatus()}>product</li>   
    </ul>
    </div>
    
        <input className='input___page' type={istatus ?'text':'password'}placeholder='Enter your password'/>
    <button onClick={()=>{setistatus(!istatus)}}>{(istatus)?'hide':'show'}</button>
    </div>

  );
}

export default App;
