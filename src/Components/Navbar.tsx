import React, { useContext, useState } from 'react'
import { FilterToggleContext,FilterToggleContextInterface } from '../App';
import "./styles/navbar.css"
export default function Navbar(){
     const context=useContext(FilterToggleContext);  
return(
        <div className='navbar'>
            <ul className='nav'>
                <li className='filter' onClick={()=>context?.setToggle((s)=>!s)}>Filter</li>

            </ul>
        </div>
    )
}
