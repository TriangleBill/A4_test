import { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from './Navbar';
import { useAppSelector } from '../app/hooks';
import { UserType } from '../app/types';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function LoginPage(): JSX.Element {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const users = useAppSelector((state) => state.auth.users)

    console.log(localStorage.getItem('isAuthorized'))

    function findUser(users: UserType[], name: string, pass: string) {
        const result = users.map((el) => {
            if (el.username === name && el.password === Number(pass)) return el
        })

        if (result[0] !== undefined) return true
        return false
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.type === 'password') {
            setPassword(e.target.value)
        } else {
            setLogin(e.target.value)
        }
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (findUser(users, login, password)) {
            localStorage.setItem('isAuthorized', 'true')
            navigate('/profile')
        } else {
            toast.error('Имя пользователя или пароль введены не верно')
        }
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="login-page">
                    <h1 className="title login-page__title">Please Sign in</h1>

                    <form className='fs-sm-3' onSubmit={handleSubmit}>
                        <div className="mb-sm-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={login} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-sm-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" value={password} />
                        </div>

                        <button type="submit" className="btn btn-primaty fs-sm-4 login-page__btn">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )
}
