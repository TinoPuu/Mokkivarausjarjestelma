import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {

return (
    <ul className= "right">
        <li><NavLink to='/'></NavLink></li>
        <li><NavLink to='/Mökki'>Mökki</NavLink></li>
        <li><NavLink to='/Kuvat'>Kuvat</NavLink></li>
        <li><NavLink to='/Peräkärry'>Peräkärry</NavLink></li>
    </ul>
)
}

export default SignedInLinks