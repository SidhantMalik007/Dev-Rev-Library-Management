
import './App.css'
import Navbar from "./Components/Navbar"
import MainPage from"./Components/MainContent"
import React, { createContext, ReactComponentElement, useState } from 'react';
import FilterModal from './Components/FilterModal';
 export interface FilterToggleContextInterface{
  toggle:boolean,
  setToggle:React.Dispatch<React.SetStateAction<boolean>>
}
export interface filtdat{
  Name:string[],
  Author:string[],
  Year:number[],
  Genre:string[]
}
export interface filterData{
 Fd:filtdat,
setFd:React.Dispatch<React.SetStateAction<filtdat>>
}
export const FilterToggleContext= React.createContext<FilterToggleContextInterface | null>(null)
export const FilterDataContext=React.createContext<filterData |null>(null);
function App() {
  const [openModal,setOpenModal]=useState(false);
  const [Fd,setFd] = useState<filtdat>(
  {Name: new Array<string>(),
  Author:new Array<string>(),
  Year:new Array<number>(),
  Genre:new Array<string>()});
  let filter=<></>;
  console.log(Fd);
  
  if(openModal){
    filter=<FilterModal></FilterModal>
  }
  return (
    <>
    <FilterDataContext.Provider
    value={{
      Fd,setFd
  }}
    >
    <FilterToggleContext.Provider
    value={{toggle:openModal,setToggle:setOpenModal}}
    >
    <Navbar></Navbar>
    {filter}
    <MainPage></MainPage>
    </FilterToggleContext.Provider>
    </FilterDataContext.Provider>
    </>
  )
}

export default App
