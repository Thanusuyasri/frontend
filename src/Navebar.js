import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navebar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" style={{marginLeft: '50px'}}>Grab Your Ticket</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul style={{marginLeft: '600px'}}>

        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className=" row navbar-nav mr-auto mt-2 mt-lg-0">
            <li className=" col nav-item active" >
              <div className="d-flex justify-content-end">
              <button className='btn btn-primary ms-auto'style={{ width: '170px'}}>
              <Link className="nav-link" to={'/login'}>UserSignin/Signup</Link>
              </button>
              </div>
              </li>
            <li className=" col nav-item " >
            <div className="d-flex justify-content-end">
              <button className='btn btn-primary ms-auto'style={{ width: '150px'}}>
              <Link className="nav-link" to={'/adminlogin'}>Admin-Login</Link>
              </button>
              </div>
            </li>
          </div>
        </div>

        </ul>


      </nav>
      </div>
    )
  }
}
