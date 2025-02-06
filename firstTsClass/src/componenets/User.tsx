// import { useState,useRef } from 'react';
// type LoginInfo = {
//     userId: string,
//     password: string
// }
// const details: any = [];

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
function User(props:User) {
    // const idRef=useRef(null);
   
    // const [loginInfo, setLoginInfo] = useState<LoginInfo>({ userId: '', password: '' });

    // const handleClick = () => {
    //     details.push(loginInfo);
    //     setLoginInfo({ userId: "", password: ""});
    //     // idRef.current=focus();
    // }

    return (
        <>
            {/* <input ref={idRef} onChange={(e) => setLoginInfo({ ...loginInfo, userId: e.target.value })} type="text" placeholder="Enter User ID" />
            <input ref={idRef} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                type="password" placeholder="Enter Password" />
            <button onClick={() => handleClick()} >Save</button>
            <ul>

                {
                    details.length == 0 ? <li>No Data</li> :
                        details.map((item: any, index: any) => (
                            <li key={index}>
                                <span>ID: {item.userId}</span>
                                <br></br>
                                <span>Password: {item.password}</span>
                            </li>
                        ))
                }

            </ul> */}

            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            {/* <h3>{props.address.city}</h3>
            <h3>{props.address.state}</h3>
            <h3>{props.address.country}</h3>
            <h3>{props.address.contact.phone}</h3>
            <h3>{props.address.contact.email}</h3> */}


        </>
    )
}

export default User