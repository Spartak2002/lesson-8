import axios from "axios"

export const Task = ({ task, onDelete, onUpdate }) => {
    const handleDelete = () => {
        axios
            .delete("http://localhost:3004/tasks/" + task.id)
            .then(response => {
                onDelete(task.id)
            })
    }

    const handleUpdate = (event) => {
        onUpdate(task.id, event.target.value)
    }

    return <div>
        <p>{task.text}</p>
        <small>status: {task.status}</small>

        {
            task.status == 'In Progress'
                ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                : task.status == 'completed'
                    ? <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
                    : <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />

        }
        <select value={task.status}
            onChange={handleUpdate}>

            <option>In Progress</option>
            <option>Completed</option>
            <option>Unstarted</option>
        </select>
        <button onClick={handleDelete}>Delete</button>
    </div>
}


/*

COMPLETED:
https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png

IN PROGERSS:
https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png

UNSTARTED
https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png
*/



//     axios
//         .patch("http://localhost:3005/tasks/" + task.id, {status: event.target.value}
//     )
//         .then(response => {
//             console.log(response.data);

//         })
// }}
// axios
//         .patch("http://localhost:3005/tasks/" + task.id, {status: event.target.value}
//     )
//         .then(response => {
//             console.log(response.data);

//         })