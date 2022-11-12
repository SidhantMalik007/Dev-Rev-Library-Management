import { useState, useContext } from "react"
import { FilterDataContext } from "../App"
import storeItems from "./data.json"
export default function GenreFilter(props:{clicked:boolean}){
    let genre:string[]=storeItems.map((item)=>item.Genre)
    genre=genre.filter((item,index)=>genre.indexOf(item)==index)
    const [checkedState,setCheckedState]=useState<boolean[]>(new Array<boolean>(genre.length).fill(false));
    const context=useContext(FilterDataContext);
    return(<>
             {
                genre?.map((ele,index)=><li key={index}
                            >
                                    <input  type="checkbox" className="cb" name='genre' id={`id-${index}`} value={String(ele)} checked={checkedState[index]|| context?.Fd.Genre.indexOf(ele)!==-1}
                                    onChange={()=>{setCheckedState((ps)=>{return(
                                        ps.map((e,ind)=>{if(ind===index)
                                            {
                                                if(!e){
                                                context?.setFd((prevs)=>{
                                                    let obj1={...prevs}
                                                    obj1.Genre.push(ele)
                                                    return obj1
                                                })
                                            }
                                            else{
                                                let n:number=context?.Fd.Genre.indexOf(ele)!
                                                context?.setFd((prevs)=>{
                                                    let obj={...prevs}
                                                    obj.Genre.splice(n,1)
                                                    return obj
                                                })
                                            }
                                                return !e
                                            }
                                        else 
                                        {
                                           
                                            // context?.Fd.Name.splice(n,1)
                                            return e
                                        }}))
                                    })}} /><label htmlFor={`id-${index}`}><>{ele}</></label>
                                </li>)
            }
            </>
    )
    
}