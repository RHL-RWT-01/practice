
function Task({tasks}) {
    return (
        <>
            <h1>Tasks</h1>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Task