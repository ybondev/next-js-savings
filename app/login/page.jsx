'use client'
import Image from 'next/image'
import {login} from '@utils/auth'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if(login(username, password)) {
            alert('success')
        } else {
            alert('error')
        }
    }
  return (
    <>
    <section className="container-fluid login_section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <div className="header">
                            MySavings
                        </div>
                        <div className="mt-3">
                            <input type="text" name="" id="" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder='Username' required/>
                        </div>
                        <div className="mt-3">
                            <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='Password' required/>
                        </div>
                        <div className="mt-3 show_password_container">
                            <input type="checkbox" name="" id="" />
                            <p>show password</p>
                        </div>
                        <div className="mt-3 btn_login_container">
                            <button className="login" onClick={handleSubmit}>
                                login
                            </button>
                        </div>
                        <div className="img_container mt-3">
                            <Image src={`./assets/undraw_savings_re_eq4w.svg`} width={300} height={300} alt='' className='img-fluid'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login