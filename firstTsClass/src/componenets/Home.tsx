type Contact = {
    phone: string,
    email: string
}

type Address = {
    city: string,
    state: string,
    country: string,
    contact: Contact
}

type User = {
    name: string,
    age: number,
    address: Address
}

function Home({ name, age, address }: User) {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <h2>You are {age} years old.</h2>
            <h3>Address is {address.city}, {address.state}, {address.country}</h3>
            <h3>Contacts</h3>
            <ul>
                <li>Phone: {address.contact.phone}</li>
                <li>Email: {address.contact.email}</li>
            </ul>

        </div>
    )
}

export default Home