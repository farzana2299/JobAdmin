import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { adminLoginApi } from '../service/allApi';
function Login() {
const navigate=useNavigate()
    const [unameValid, setunameValid] = useState(false)
    const [pswValid, setpswValid] = useState(false)

    const [user, setUser] = useState({
        uname: "", psw: ""
    })
    const setDatas = (e) => {
        const { value, name } = e.target
        if (name === 'cname') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setunameValid(false)
            } else {
                setunameValid(true)
            }
        }
        if (name === 'psw') {
            if (value.match(/^[a-zA-Z0-9@]+$/)) {
                setpswValid(false)
            } else {
                setpswValid(true)
            }
        }
        setUser({ ...user, [name]: value });
    }
    // console.log(user);
    const handleLogin=async(e)=>{
        e.preventDefault()
        const { psw, uname } = user
            if (!psw || !uname) {
                alert("Please fill all datas")
            }
            else
            {
                 // api call
                 const bodyData = { psw, uname }
                 const result = await adminLoginApi(bodyData)
                //  console.log(result);
                 if (result.status>= 200 && result.status < 300) {
                    alert("Login Successfull")
                    setUser({cname:"",email:"",psw:"",logo:""})   
                  
                    navigate('/dashboard')
                }
                else {
                    alert(result.response.data)
                    
                }
            }
    
    }
    return (
        <div>
            <div className='container w-50 mt-5 mb-5 shadow-lg p-5'>
                <h1 className='text-center text-success'>ADMIN LOGIN</h1>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mt-5 mb-3"
                    >
                        <Form.Control value={user.uname} name='uname' onChange={(e) => setDatas(e)} type="text" placeholder="Username" />
                    </FloatingLabel>
                    {unameValid &&
                        <p className='text-danger'>Invalid Username</p>
                    }
                </>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mt-5 mb-3"
                    >
                        <Form.Control value={user.psw} name='psw' onChange={(e) => setDatas(e)} type="password" placeholder="Password" />
                    </FloatingLabel>
                    {pswValid &&
                        <p className='text-danger'>Invalid Password</p>
                    }
                </>
                <Button onClick={(e) => handleLogin(e)} className='btn btn-success mt-5 px-5 py-3 mb-2 rounded-pill'>LOGIN</Button>
            </div>
        </div>
    )
}

export default Login