export const Stats = ({ totalTasks = 0, totalInProgress = 0, totalCompleted = 0, totalUnstarted = 0 }) => {
    return <div className="stats">
        <h3>Stats</h3>
        <p>Total In Progress: {totalInProgress}/{totalTasks}</p>
        <p>Total Completed: {totalCompleted}/{totalTasks}</p>
        <p>Total Unstarted: {totalUnstarted}/{totalTasks}</p>



    </div>
}