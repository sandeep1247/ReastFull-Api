import React from "react";
import Card from "./Card";
function Cards({users ,handleRemove}){
    return(
        <div className="w-full h-76 max-h-76 p-4 flex justify-center gap-4 flex-wrap mt-3">
            {
                users.map((item,index)=>{
                    return <Card handleRemove={handleRemove} id={index} users={item} key={index}/>
                })
            }
            
        
        </div>
    )
}
export default Cards;