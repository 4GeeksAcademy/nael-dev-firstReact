import React from "react";

export const Card = (props) => {
    return (
        <div className="card mx-2" style={{ width: '18rem' }}>
            <img src={props} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export const GroupCard = () => {
    const images = [
        "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAejl8kFsEhkLfTx-k46MnpohqAx4KuG0jOqdlKuc-ubFa-buzE2ImhchET0cpafPIqrXHvbYZ7f6gP2XhQGU1lg",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVpHoNY7fNuiiCf-fqZ0_6tz42XzNiqdK-R-XI-r_K-mAO3TnbuCKANshFwAZSGRpZMfVji1l7i3qFwYhjIznGzQ",
        "https://static.wikia.nocookie.net/reinoanimalia/images/8/88/Zorro_rojo_4.png/revision/latest?cb=20130514223627&path-prefix=es"

    ];



    return (
        <div className="card-group">
            images.map((imagen,index)=>(
            <Card key={index} props={imagen} />
            ))
            
            
          
        </div>

    )
}


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
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
        <div className="card-footer">
            Este es el pie de Página
        </div>
    )
}
