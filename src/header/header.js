import React from 'react'
import './header.css';
const header = (props) => {
    console.log(props);
  return (
    
    <div className='nav-bar'>
        <div className='logo'>
            <h1>LOGO</h1>
        </div>
        <div className='nav-list'>
            <button onClick={()=>props.get('dinesh')}>click</button>
            <p>{props.name}</p>
            <p>{props.name}</p>
            

        </div>
		
    </div>
  )
}

export default header