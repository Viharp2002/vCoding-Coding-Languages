import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"

const Login = (props) => {

    const usNavigate = useNavigate();
    const[user,setUser] = useState({
        email:"", password:""
    });

    let namevihar,valuevihar;
    const handleInputs = (e)=>{
        namevihar = e.target.name;
        valuevihar = e.target.value;

        setUser({...user,[namevihar]:valuevihar});
    }

    const postData = async(e)=>{
        e.preventDefault();
        const{password,email} = user;

        const res = await fetch("http://localhost:3900/loginadmin",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })

        const data = await res.json();

        if(res.status === 422)
        {
            window.alert(data.msg);
        }
        else
        {
            window.alert("Success");
            localStorage.setItem('sanket',data.msg);
            props.setCookie(data.msg);
            usNavigate("/");
        }
    }

  return (
    <>
     <div className="vh-100 d-flex justify-content-center align-items-center ">
            <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h2 className="text-center mb-4 text-primary">Login Form</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={user.email} onChange={handleInputs} className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" value={user.password} onChange={handleInputs} className="form-control border border-primary" id="exampleInputPassword1"/>
                    </div>
                    <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={postData} type="submit">Login</button>
                    </div>
                </form>
                <div className="mt-3">
                    <p className="mb-0  text-center">Forget Password? <a href="/"
                            className="text-primary fw-bold">Click Here</a></p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Login
