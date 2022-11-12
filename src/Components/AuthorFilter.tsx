import { useContext, useState } from "react"
import { FilterDataContext } from "../App"
import storeItems from "./data.json"
export default function AuthorFilter(props:{clicked:boolean}){
    let authors:string[]=storeItems.map((item)=>item.Author)
    authors=authors.filter((item,index)=>authors.indexOf(item)==index)
    const [checkedState,setCheckedState]=useState<boolean[]>(new Array<boolean>(authors.length).fill(false))
    const context=useContext(FilterDataContext)
    return(<>
        {
           authors?.map((ele,index)=><li key={index}
                       >
                               <input  type="checkbox" className="cb" name='author' id={`id-${index}`} value={String(ele)} checked={checkedState[index]|| context?.Fd.Author.indexOf(ele)!==-1}
                               onChange={()=>{setCheckedState((ps)=>{return(
                                ps.map((e,ind)=>{if(ind===index)
                                    {
                                        if(!e){
                                        context?.setFd((prevs)=>{
                                            let obj1={...prevs}
                                            obj1.Author.push(ele)
                                            return obj1
                                        })
                                    }
                                    else{
                                        let n:number=context?.Fd.Author.indexOf(ele)!
                                        context?.setFd((prevs)=>{
                                            let obj={...prevs}
                                            obj.Author.splice(n,1)
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