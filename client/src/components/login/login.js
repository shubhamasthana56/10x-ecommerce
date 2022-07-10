import { useState } from "react";
import axios from "axios";
const Login = ()=> {
    const [login, setLogin] = useState({userName: "", password: ""})
    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3001/user/login",
            method: "POST",
            headers: {
            },
            data: {username: login.userName, password: login.password}
        }).then((loginData)=> {
           localStorage.setItem("authorization", loginData.data.authToken);
        }).catch((err)=> {
            console.log(err)
        })
    }
    return (
        <>
            <div>
                <form>
                    <div>
                        <div>
                        <label for="username">Username:</label>
                        </div>
                        
                        <div>
                            <input id="username" type="text" onChange={(e)=> {setLogin({...login, userName: e.target.value})}}/>
                        </div>
                        <div>
                        <label for="username">Password:</label>
                        </div>
                        
                        <div>
                            <input id="password" type="password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                        </div>
                    </div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;