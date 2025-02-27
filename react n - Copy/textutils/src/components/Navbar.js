import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/*  <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">home <span className="sr-only">(current)</span></a>
        </li>
       {/* <li className="nav-item">
          <a className="nav-link" href="/">about</a>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>*/}
   </div>
   <div class={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input class="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault" >Eneble Darkmode</label>
</div>
</div>
 
</nav>
</>
  );
}
Navbar.prototype={title:PropTypes.string.isRequired}
Navbar.defaultprop={
  title:'set time here'
};
