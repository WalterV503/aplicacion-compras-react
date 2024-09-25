import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"
import { useContext } from "react"



export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Compras</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={listaCompras.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
