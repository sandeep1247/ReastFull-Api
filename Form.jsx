import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}){
     const {register,handleSubmit,reset} = useForm()
     const handleFormSubmit = (data)=>{
    handleFormSubmitData(data)
    reset()
     }
     
    return(
        <div className="w-full  flex items-center justify-center">
            <div className="w-1/4 mx-auto absolute top-0 left-0 p-4 rounded-lg">
         <form action=""onSubmit={handleSubmit(handleFormSubmit)} className="w-full flex flex-col justify-center items-center ">
            <input {...register("name")} className="border mt-2  rounded-md outline-none bg-zinc-50 px-2 font-semibold" type="text" placeholder="name" />
            <input {...register("email")} className="border mt-2 rounded-md outline-none bg-zinc-50 px-2 font-semibold" type="text" placeholder="email"/>
            <input {...register("image")} className="border mt-2 rounded-md outline-none bg-zinc-50 px-2 font-semibold" type="text"placeholder="image URL" />
            <input className=" mt-2 bg-sky-300 px-2 py-1 rounded-md " type="Submit"  />
         </form>
        </div>
        </div>
    )
}
export default Form