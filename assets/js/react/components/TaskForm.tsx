import React from "react";
import { useState } from "react";

export function TaskForm({setTasks}) {
    const [input, setInput] = useState(typeof string);

   const addItem = async () => {
    const description = input;
     const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({task: {description: description, completed: false}})
     }

     const responseCreate = await fetch(
        `http://localhost:4000/api/tasks`,
        requestOptions
     )
     
     const response = await fetch(
        "http://localhost:4000/api/tasks",
     )
     const responseJson = await response.json()
     setTasks(responseJson)
   
   }
 
   return (
    <>
        <div className="task-form-container">
            <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder="Type a task"/>
            <button onClick={() => addItem()} className="button">
                Add new Task
            </button>
        </div>
        <hr className="my-12" />
    </>
    );
}