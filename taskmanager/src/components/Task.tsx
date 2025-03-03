type TaskType = { title: string; description: string };
type Tasks = TaskType[];

function Task({ tasks }: { tasks: Tasks }) {
    return (
        <>
            <h1>Tasks</h1>
            {
                tasks.map((task: TaskType, index: number) => (
                    <div key={index}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Task;
