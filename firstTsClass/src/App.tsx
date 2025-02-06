// import { useState } from "react"
import Home from "./componenets/Home"
// import User from "./componenets/User"
// import Home from "./componenets/Home"
function App() {

  const user = {
    name: "Rahul",
    age: 20,
    address: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
      contact: {
        phone: "1234567890",
        email: "rahulrawat@gmail.com"
      }
    }
  }

  return (
    <>
      <Home name={user.name} age={user.age} address={user.address} />
      {/* <User user={user} /> */}

    </>
  )
}

export default App
