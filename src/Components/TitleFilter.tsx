import { useContext, useState } from "react"
import { FilterDataContext } from "../App"
import storeItems from "./data.json"
export default function TitleFilter(props:{clicked:boolean}){
    let name:string[]=storeItems.map((item)=>item.Name)
    name=name.filter((item,index)=>name.indexOf(item)===index)
    const [checkedState,setCheckedState]=useState<boolean[]>(new Array<boolean>(name.length).fill(false))
    const context=useContext(FilterDataContext)
    return(<>
            {
                name?.map((ele,index)=><li key={index}
                            >
                                    <input  type="checkbox" className="cb" name='name' id={`id-${index}`} value={String(ele)} checked={checkedState[index] || context?.Fd.Name.indexOf(ele)!==-1}
                                    onChange={()=>{setCheckedState((ps)=>{return(
                                        ps.map((e,ind)=>{if(ind===index)
                                            {
                                                if(!e){
                                                context?.setFd((prevs)=>{
                                                    let obj1={...prevs}
                                                    obj1.Name.push(ele)
                                                    return obj1
                                                })
                                            }
                                            else{
                                                let n:number=context?.Fd.Name.indexOf(ele)!
                                                context?.setFd((prevs)=>{
                                                    let obj={...prevs}
                                                    obj.Name.splice(n,1)
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