import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(): JSX.Element {
    return (
        <nav className="navbar navbar-expand navbar-light bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/news">Новости</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/profile">Профиль</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
