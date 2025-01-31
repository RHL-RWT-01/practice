import { useState,useRef } from 'react';
type LoginInfo = {
    userId: string,
    password: string
}
const details: any = [];

function User() {
    const idRef=useRef(null);
   
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({ userId: '', password: '' });

    const handleClick = () => {
        details.push(loginInfo);
        setLoginInfo({ userId: '', password: '' });
        idRef.current.focus();
    }

    return (
        <>
            <input ref={idRef} onChange={(e) => setLoginInfo({ ...loginInfo, userId: e.target.value })} type="text" placeholder="Enter User ID" />
            <input  onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
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

            </ul>
        </>
    )
}

export default User