import React from "react";

export const Card = ({imagen,title, text, buttonText,link}) => {

    return (
        <div className="card m-2 card-size">
            <img src={imagen} className="card-img-top size-image" alt="Imagen del anime" />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-success d-flex justify-content-center">{buttonText}</a>
            </div>
        </div>
    )
}

export const Jumbotron = () => {
    return (
        <div className=" p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">El rincón friki de React</h1>
                <p className="col-md-8 fs-4">Este es un ejemplo de la primera web creada con react por mi
                </p>
                <button className="btn btn-success btn-lg" type="button">Botón que no hace na</button>
            </div>
        </div>
    )
}


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export const Foot = () => {
    return (
        <div className="card-footer d-flex justify-content-center bg bg-success foot-size m-2">
            Copyright@ NaelDiaz
        </div>
    )
}
