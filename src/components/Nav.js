import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mui/material/Icon'
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">To Do</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li> */}
                                <Icon baseClassName="fas" className="fa-plus-circle" color="primary">add_circle</Icon>
                                <Box component="span" sx={visuallyHidden}>Create a user</Box>
                                

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}