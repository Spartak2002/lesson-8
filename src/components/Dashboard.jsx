import { useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import { useEffect } from "react"
import axios from "axios"

export const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    const addTask = task => {
        setTasks([...tasks, task])
    }

    const handleDelete = id => {
        setTasks(tasks.filter(task => task.id != id))
    }

    useEffect(() => {
        axios
            .get("http://localhost:3004/tasks")
            .then(response => setTasks(response.data))
    })


    const updateTask = (id, status) => {
        axios
            .patch(`http://localhost:3004/tasks/${id}`, { status })
            .then((response) => {
                console.log(response.data)
                setTasks(tasks => tasks.map(task =>
                    task.id == id ? { ...task, status } : task
                )
                )
            })
    }

    return <div className="dashboard">
        <div className="row">
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onUpdate={updateTask}

            />
            <AddTask
                onAdd={addTask}
            />
        </div>
        <Stats 
        totalTasks={tasks.length}
        totalInProgress={tasks.filter(task => task.status == 'In Progress').length}
        totalCompleted={tasks.filter(task => task.status == 'Completed').length}
        totalUnstarted={tasks.filter(task => task.status == 'Unstarted').length}
        />
    </div>
}