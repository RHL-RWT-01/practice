interface User {
    name: string,
    age: number,
    email: string
}
function Interface({ name, age, email }: User) {
    return (
        <>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Email:{email}</h2 >
        </>
    )
}

export default Interface