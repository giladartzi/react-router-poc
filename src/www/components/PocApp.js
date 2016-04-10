import React from 'react';
import NavLink from './NavLink';

export default function PocApp(props) {
    return (
        <div>
            <h1>POC App</h1>
            <nav>
                <NavLink to='/' onlyActiveOnIndex={true}>A</NavLink>
                <NavLink to='/b/abcde'>B</NavLink>
                <NavLink to='/c'>C</NavLink>
            </nav>
            {props.children}
        </div>
    );
}