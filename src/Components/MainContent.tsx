import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import "./styles/main.css"
import storeItems from "./data.json"
import { filtdat, FilterDataContext } from '../App'
export default function MainContent(){
    const context=useContext(FilterDataContext)
    
    const[scr,setSrc]=useState(1000)
    const j=useRef(0);
    let i=0;
    const lit=useRef(new Array())
    useEffect(()=>{
        lit.current=new Array();
        j.current=0;
        setSrc(1000)
    },[context?.Fd])
    for( i =0;i<10;i++)
    {
        let item=storeItems[i+j.current];
        if((context?.Fd.Name.indexOf(item.Name)!==-1||context?.Fd.Year.indexOf(item.Year)!==-1||context?.Fd.Author.indexOf(item.Author)!==-1||context?.Fd.Genre.indexOf(item.Genre)!==-1)
        ||(context.Fd.Name.length===0 && context.Fd.Author.length===0 && context.Fd.Genre.length===0 && context.Fd.Year.length===0))
        lit.current.push(item);


    }
    window.onscroll=()=>{
        console.log(window.scrollY);
        console.log(scr);
        
        if(window.scrollY>scr)
            {
                console.log("hi");
                
                j.current=i;
                setSrc((ps)=>ps+1000)
            }
        
        
    }
    
    // let lit=storeItems.filter((item)=>{
    //     return(
    //          (context?.Fd.Name.indexOf(item.Name)!==-1||context?.Fd.Year.indexOf(item.Year)!==-1||context?.Fd.Author.indexOf(item.Author)!==-1||context?.Fd.Genre.indexOf(item.Genre)!==-1)
    //          ||(context.Fd.Name.length===0 && context.Fd.Author.length===0 && context.Fd.Genre.length===0 && context.Fd.Year.length===0)
    //     )
    // })
    
    return(<div className='cont' >
    <ul className='items' >
     {lit.current.map((ele)=><li>
        <Card name={ele.Name} author={ele.Author} genre={ele.Genre} rating={ele['User Rating']} year={ele.Year}></Card>
    </li> )}
    </ul>
    </div>)
}