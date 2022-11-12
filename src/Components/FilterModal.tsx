import { ReactComponentElement, useContext, useEffect, useRef, useState } from "react";
import { FilterDataContext, FilterToggleContext } from "../App";
import Navbar from "./Navbar";
import "./styles/popup.css"
import storeItems from "./data.json"
import TitleFilter from "./TitleFilter";
import AuthorFilter from "./AuthorFilter";
import YearFilter from "./YearFilter";
import GenreFilter from "./GenreFilter";

export default function FilterModal(){
    const context=useContext(FilterToggleContext)
    const context2=useContext(FilterDataContext);
    const filtRef=useRef<HTMLUListElement>(null);
    const tabRef=useRef<HTMLUListElement>(null);
    const [FilterClick,setFilterClick]=useState<boolean>(false);
    let filt:{
        Name:string[],
        Author:string[],
        Year:number[],
        Genre:string[]
    }={
        Name: new Array<string>(),
        Author:new Array<string>(),
        Year:new Array<number>(),
        Genre:new Array<string>()
    };

    const [activeState,setActiveState]=useState<string|null>(null);
    
        useEffect(()=>{
            if(tabRef.current!==null)
            {
                (tabRef.current as HTMLElement).querySelectorAll(".f").forEach((item)=>{
                    if(item.textContent===activeState)
                        item.classList.add("active")
                    else
                        item.classList.remove("active")
                })
            }
        },[activeState])
        
    return(
        <>
        <div className="overlay">
            <div className="popup">
                <div className="close" onClick={()=>{context?.setToggle(false)}}>X</div>
                <div className="filters">
                    <ul className="select" ref={tabRef}>
                        <li className="title f" onClick={(e)=>setActiveState((e.target as HTMLElement).textContent)
                        }>Title</li>
                        <li className="author f" onClick={(e)=>setActiveState((e.target as HTMLElement).textContent)
                        }>Author</li>
                        <li className="year f" onClick={(e)=>setActiveState((e.target as HTMLElement).textContent)
                        }>Year</li>
                        <li className="genre f" onClick={(e)=>setActiveState((e.target as HTMLElement).textContent)
                        }>Genre</li>
                    </ul>
                </div>
                
                <div className="fdata">
                            <ul className="filterr" ref={filtRef}>
                                {
                                activeState==="Title"?<TitleFilter clicked={FilterClick}></TitleFilter>:activeState==="Author"?<AuthorFilter clicked={FilterClick}></AuthorFilter>:activeState==="Year"?<YearFilter clicked={FilterClick}></YearFilter>:activeState==="Genre"?<GenreFilter clicked={FilterClick}></GenreFilter>:<></>
                                }
                            </ul>
                </div>
                <button className="filterBtn" onClick={()=>{
                    context2?.setFd({
                        Name: new Array<string>(),
                        Author:new Array<string>(),
                        Year:new Array<number>(),
                        Genre:new Array<string>()
                    })
            }
            }>CLEAR FILTERS</button>
            </div>
        </div>
        </>
    )
}