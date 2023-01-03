import React, { useState, useEffect } from 'react';
import Navbarr from './navbar';
import { createBrowserHistory } from 'history';
function Signup() {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/signup")
        }
    })

    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = createBrowserHistory();

    async function register() {
        let item = { id, name, password }
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register/", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/signup")
    }
    return (
        <><>
            <Navbarr />
        </><div className="col-md-6 col-md-offset-3">
                <h1>Sign up</h1>
                <input type='text' value={id} onChange={(e) => setID(e.target.value)} className="form-control" placeholder="User ID" />
                <br />
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
                <br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <br />
                <button onClick={register} className="btn btn-primary col-md-6 col-md-offset-3">Sign up</button>

            </div></>
    )
}
export default Signup