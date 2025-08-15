import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
 function App(){
  const [users,setusers] = useState([])

  const handleFormSubmitData = (data)=>{
        setusers([...users, data])
     }
     const handleRemove = (id)=>{
     setusers(()=>users.filter((item,index)=>index!=id))
     }
  return(
    <div className="w-full h-screen  flex items-center justify-center">
     <div className="container mx-auto">
       <Cards handleRemove={handleRemove}  users={users}/>
       <Form  handleFormSubmitData={handleFormSubmitData}></Form>
     </div>
    </div>
  )
 }
 export default App;