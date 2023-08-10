import { createContext } from "react";
import {React,useState} from "react";

export const contextHandel = createContext();

function Context({children}){
  
const [mode,setMode]= useState(false);

const lightFunc=()=>{
   setMode(true);
}

const darkFunc = ()=>{
  setMode(false);
}
const [check,setCheck]=useState(false);





console.log(check)
const data ={
  mode,setMode,check,setCheck,lightFunc,darkFunc
};
    return(
        
<contextHandel.Provider value={data}>
        {children}
</contextHandel.Provider>
        
    )
}
export default Context;


