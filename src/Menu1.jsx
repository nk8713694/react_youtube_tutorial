import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Menu1 = () => {
    return (
        <div>
            <>
            <NavLink exact to="/" activeClassName="active_class"> home page me jana hai t o </NavLink>
            <br/>
            <NavLink to="/contact" activeClassName="active_class">contact page go </NavLink>
            </>
        </div>
    )
}
