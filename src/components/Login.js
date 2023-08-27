import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <>
            <div>
                <div class="login-container">
                    <div class="login-login1">
                        <form action="POST">
                            <input className='login-text23' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            <input type="password" class="login-text25" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            <button class="login-text21" type="submit" onClick={submit} >Login</button>

                        </form>

                        <br />
                        <p>OR</p>
                        <br />

                        <Link to="/signup" class="login-text16" >Dont have a account yet? create MGL id</Link>

                        <span class="login-text14"><span>MGL ID LOGIN</span></span>
                        <span class="login-text16">
            
                        
                        </span>
                        <span class="login-text19"><span>Forgot password?</span></span>
                        {/* <img
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca7205db-90d4-428d-9a84-f6555d1468ea/4883c64e-43d5-457d-b264-9f6f92032a65?org_if_sml=1123"
                            alt="Rectangle191330"
                            class="login-rectangle19"
                        />
                        <img
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca7205db-90d4-428d-9a84-f6555d1468ea/b484facc-7f4a-4db0-99f6-2e8ec58b4a6b?org_if_sml=1123"
                            alt="Rectangle201330"
                            class="login-rectangle20"
                        /> */}
        
                        {/* <span class="login-text21"><span>Login</span></span> */}

    
                    </div>
                </div>
            </div>

            {/* <h1>Login</h1>

                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                    <input type="submit" onClick={submit} />

                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/signup">Signup Page</Link> */}

        </>
    )
}

export default Login