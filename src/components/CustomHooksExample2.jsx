import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"


function CustomHooksExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = (e) => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            data: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }
  return (
      <>
        <form onSubmit={onSubmit} className="w-25">
            <div className="mb-3">
                <label htmlFor="" className="form-label">Task</label>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                
            </div>
            <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
        </form>

        <hr />

        {tasks.map((task) => (
            <h3 key={task.date}>{task.task}</h3>
        ))}
      
      </>
    
  )
}

export default CustomHooksExample2