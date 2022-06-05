import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'? 'light':'dark'} bg-${props.mode==='light'? 'light':'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>  {/*it will reload */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    {/*
      <button type="button" className="btn btn-primary" onClick={props.toggleMode} >toggle mode</button>
          
  */}
                </div>
                <div class={`mx-3 form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.setBlueMode} name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Enable Blue dark
                    </label>
                </div>
                <div class={`mx-3 form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.setDarkMode} name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Enable dark mode
                    </label>
                </div>
                <div class={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" onClick={props.setLightMode} name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Enable light mode
                    </label>
                </div>
                {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                </div> */}

            </div>

        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "defTitle"
}
