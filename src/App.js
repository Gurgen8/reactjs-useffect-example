
import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react"
    
 


export default function App() {


    const[value,setValue]=useState("")
    const[data,setData]=useState()
   
    useEffect(() => {
        const time=   setTimeout(()=>{
           if(value){
              axios.get(`https://corona-api.com/countries/${value}`).then(results=>setData(results.data.data))
                console.log(data)
               }  setData("")  
        },500)
        return ()=>{
            clearTimeout(time)
        }
       
    }, [value])

  
    

   
    return <div> 
       <div style={{color:"red"}}>CORONAVIRUSE STATE</div>
      <input placeholder="ENTER COUNTRIES CODE IN 2 LATTER" value={value} type="text" onChange={(ev)=>{
        setValue(ev.target.value)
       }} />
       <ul>
         
         {data?<>
          <li> code:{data.code}</li> 
          <li> countries:{data.name}</li>
          <li> population:{data.population}</li> 
          <li> latitude:{data.coordinates.latitude}</li> 
          <li> longitude:{data.coordinates.longitude}</li> 
         <li> death:{data.today.deaths}</li> 
         <li> confirmed:{data.today.confirmed}</li> 
          </>
         :""}  
    
       </ul>
       
    </div>
}
