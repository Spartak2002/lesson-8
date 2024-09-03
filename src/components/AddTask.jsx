import axios from "axios"
import { useState } from "react"

export const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const onSubmit = event => {
        event.preventDefault()
        if (!text.trim()) {
            return setError('Please add a task')
        }
        setError('')

        axios
            .post("http://localhost:3004/tasks", { text, status: 'Unstarted' })
            .then(response => {
                onAdd(response.data)
                setText('')

            })

    }

    return <div>
        <p>AddTask</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={onSubmit}>
            <input
                value={text}
                onChange={event => setText(event.target.value)}

            />
            <button>Save</button>

        </form>
    </div>
}