import React from 'react'

export default function Navbar(): JSX.Element {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Новости</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Профиль</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
