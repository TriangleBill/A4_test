import React from 'react'
import Navbar from './Navbar';

export default function LoginPage(): JSX.Element {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="login-page">
                    <h1 className="title login-page__title">Please Sign in</h1>

                    <form className='fs-sm-3'>
                        <div className="mb-sm-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-sm-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primaty fs-sm-4 login-page__btn">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )
}
