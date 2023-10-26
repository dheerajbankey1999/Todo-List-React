"use client"
import React, { useState } from "react";
const page= () => {
   const [title , settitle] =useState("");
   const [desc, setdesc]=useState("");
   const [task , settask]=useState([]);
   let rendortask=<h4>No task available</h4>;
   const deletehandler=(i)=>{
    let copytask=[...task];
    copytask.splice(i,1);
    settask(copytask);
   }
    if(task.length>0){                       // task seen by this function
      rendortask=task.map((t,i)=>{
        return (<li  key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-8 w-2/3">
        <h4 className="text-2xl font-bold">{t.title}</h4>
        <h5 className="text- 2xl font-lg">{t.desc}</h5>
      </div>
      <button   onClick={()=>{
        deletehandler(i)
      }}  className="px-4 py-2 text-white font-bold bg-red-400 rounded ">Delete</button>
      </li>);
     });
    }
   
   const submitHandler=(e)=>{
    e.preventDefault();
    settask([...task,{title,desc}])
   // console.log(task)
   settitle(" ");
    setdesc(" ");
   }
  return (  <div>
          
         <h1 className="font-bold text-white bg-black text-center text-5xl p-5">My Todo List</h1>
         <form onSubmit={submitHandler}>
          <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 " placeholder="Enter title here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}/>
          <input type="text" className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 " placeholder="Enter the description"
          value={desc}
          onChange={(e)=>{
          setdesc(e.target.value);
          }}/>
           <button className="px-3 py-4 bg-black text-white   font-bold rounded m-8 ">Add Task</button>
         </form>
         <div className=" bg-slate-200 p-8"><h2> <ul>{rendortask}</ul></h2></div>
  </div>);
}

export default page;