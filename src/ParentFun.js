import React,{useEffect, useState} from 'react'
import ChildFun from './ChildFun'
const ParentFun = () => {


    const[name,setName]=useState("lifecycle")
    const[show,setShow]=useState(true)
  const [age,setAge]=useState(56)
    useEffect(()=>{

        console.log("componentdidmount",name);
       

    },[])


    useEffect(()=>{

        console.log("componentdidmount",name);
       

    },[name,age])
  return (
    <div>
        hi {name}
        <button onClick={()=>setName("functin comp")}>click</button>
        <button onClick={()=>setShow(!show)}>ubdate</button>
   {show ?<ChildFun/> : null} 
    </div>
  )
}

export default ParentFun
