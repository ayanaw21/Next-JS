import React, { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import type { Session } from "@supabase/supabase-js";
interface Task {
    id:number,
    title:string,
    description:string,
    created_at :string
}
const TaskManger = ({session}:{session:Session}) => {
	const [ newTask, setNewTask ] = useState ({ title: "", description: "" });
    const [newDescription,setNewDescription] = useState<string>("")
    const[tasks,setTasks] = useState<Task[]>([])
    const fetchTasks = async ()=>{
        const {data,error} =await supabase.from("tasks").select("*").order("created_at",{ascending:true})
        if(error) {
            console.error("Error reading Task",error.message)
            return
        }

        setTasks(data) 
    }
    useEffect(()=>{fetchTasks()},[])

    const updateTask = async (id:number)=>{
        const {error} = await supabase.from("tasks").update({description:newDescription}).eq("id",id)
         if(error) {
            console.error("Error Adding Task",error.message)
            return
        }
    }
    
    const handleSubmit =  async(e:any)=>{
        e.preventDefault()
        const {error} = await supabase.from("tasks").insert({...newTask,email:session.user.email}).single()
        if(error) {
            console.error("Error Adding Task",error.message)
            return
        }
        setNewTask({title:"",description:''})
    }
    const deleteTask =  async(id:number)=>{
        const {error} = await supabase.from("tasks").delete().eq("id",id)
        if(error) {
            console.error("Error deleting Task",error.message)
            return
        } 
    }
	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
			<h2>Task Manager CRUD</h2>

			{/* Form to add a new task */}
			<form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Task Title"
					onChange={(e) =>
						setNewTask((prev) => ({
							...prev,
							title: e.target.value,
						}))
					}
					style={{
						width: "100%",
						marginBottom: "0.5rem",
						padding: "0.5rem",
					}}
				/>
				<textarea
					placeholder="Task Description"
					onChange={(e) =>
						setNewTask((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
					style={{
						width: "100%",
						marginBottom: "0.5rem",
						padding: "0.5rem",
					}}
				/>

				{/* <input type="file" accept="image/*" /> */}

				<button type="submit" style={{ padding: "0.5rem 1rem" }}>
					Add Task
				</button>
			</form>

			{/* List of Tasks */}
			<ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task ,key)=>(

				<li key={key}
					style={{
						border: "1px solid #ccc",
						borderRadius: "4px",
						padding: "1rem",
						marginBottom: "0.5rem",
					}}
				>
					<div>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<div>
                            <textarea name="" id="" placeholder="Updated Description" onChange={(e)=>setNewDescription(e.target.value)} />
							
							<button
								style={{
									padding: "0.5rem 1rem",
									marginRight: "0.5rem",
								}}
                                onClick={()=>{updateTask(task.id)}}
								
							>
								Edit
							</button>
							<button
								style={{ padding: "0.5rem 1rem" }}
                                onClick={()=>deleteTask(task.id)}
							>
								Delete
							</button>
						</div>
					</div>
				</li>
                ))}
			</ul>
		</div>
	);
};

export default TaskManger;
