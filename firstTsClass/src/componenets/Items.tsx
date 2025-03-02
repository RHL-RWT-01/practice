type Item = {
    name: string,
    price: number,
    description: string
}
const items: Item[] = [
    {
        name: "Apple",
        price: 20,
        description: "Apple is a fruit"
    },
    {
        name: "Banana",
        price: 10,
        description: "Banana is a fruit"
    },
    {
        name: "Orange",
        price: 15,
        description: "Orange is a fruit"
    }
]

function Items() {
    return (
        <>
            <h1>Items</h1>
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>Name: {item.name}</h2>
                            <h3>Price: {item.price}</h3>
                            <p>Description: {item.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Items