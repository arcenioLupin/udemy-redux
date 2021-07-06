import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {cerrarSessionAccion} from '../redux/usuarioDucks'
import {useDispatch,useSelector} from 'react-redux'
import { withRouter } from 'react-router'

const Navbar = (props) => {
    const dispatch = useDispatch()
    const activo = useSelector(store => store.usuario.activo)

    const cerrarSesion = () =>{
        dispatch(cerrarSessionAccion())
        props.history.push("/login") 
    }

    return (
        <div className ="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" style={{marginLeft:"15px"}} to="/">APP POKE</Link>
            <div className="d-flex">
               
                {
                    activo ? (
                        <>
                        <NavLink className="btn btn-dark mr-2" to="/" exact >Inicio</NavLink>
                        <button className="btn btn-dark mr-2"
                                onClick={() => cerrarSesion()}   
                        >
                        Cerrar sesión
                        </button>
                    </>

                    ) : (
                        <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>
                    ) 
 
                }

            </div>
        </div>
    )
}

export default withRouter(Navbar)
