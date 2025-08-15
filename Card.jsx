import React from "react";

function Card({users,handleRemove,id}){
    return(
         <div className="w-45 h-full bg-zinc-100 p-2 flex flex-col items-center rounded-lg ">
           <div className="image w-20 h-20 rounded-full bg-amber-500 overflow-hidden">
            <img className=" w-full h-full object-cover" src={users.image} alt="" />
           </div>
           <h1 className="font-semibold mt-2 text-xl">{users.name}</h1>
           <h4 className="opacity-60 text-xs mt-1 font-semibold">{users.email}</h4>
           <p className=" mt-3 text-center text-xs font-semibold leading-4 tracking-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.</p>
           <button onClick={()=>handleRemove(id)} className="px-4 py-1 mt-3 bg-red-500 text-xs rounded-md font-semibold text-white"> Remove it</button>
        </div>
    )
}
export default Card