import { useContext, useState } from "react"
import { FilterDataContext } from "../App"
import storeItems from "./data.json"
export default function YearFilter(props:{clicked:boolean}){
    let year:number[]=storeItems.map((item)=>item.Year)
    year=year.filter((item,index)=>year.indexOf(item)==index)
    const [checkedState,setCheckedState]=useState<boolean[]>(new Array<boolean>(year.length).fill(false))
    const context=useContext(FilterDataContext)
    return(<>
        {
           year?.map((ele,index)=><li key={index}
                       >
                               <input  type="checkbox" className="cb" name='years' id={`id-${index}`} value={String(ele)} checked={checkedState[index]|| context?.Fd.Year.indexOf(ele)!==-1}
                               onChange={()=>{setCheckedState((ps)=>{return(
                                ps.map((e,ind)=>{if(ind===index)
                                    {
                                        if(!e){
                                        context?.setFd((prevs)=>{
                                            let obj1={...prevs}
                                            obj1.Year.push(ele)
                                            return obj1
                                        })
                                    }
                                    else{
                                        let n:number=context?.Fd.Year.indexOf(ele)!
                                        context?.setFd((prevs)=>{
                                            let obj={...prevs}
                                            obj.Year.splice(n,1)
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