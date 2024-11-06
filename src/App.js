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
      <li>Home</li>  
      <li>about</li> 
      <li>Blog</li> 
      <li>contact</li> 
      <li>projects</li> 
      <li>product</li>   
    </ul>
    </div>
    
        <input className='input___page' type={istatus ?'text':'password'}placeholder='Enter your password'/>
    <button onClick={()=>{setistatus(!istatus)}}>{(istatus)?'hide':'show'}</button>
    </div>

  );
}

export default App;
