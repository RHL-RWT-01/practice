interface User {
    name: string,
    age: number,
    email: string
}
interface Employee extends User {
    salary: number
}
function Interface({ name, age, email, salary}: Employee) {
    return (
        <>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Email:{email}</h2 >
            <h3>Salary: {salary}</h3>
        </>
    )
}

export default Interface