import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Usermybooking from './Usermybooking'
export default class Navebarforadmin extends Component {
    constructor(){
        super()
        this.state={username:localStorage.getItem('username') }
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" style={{marginLeft: '50px'}}>Grab Your Ticket</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul style={{marginLeft: '360px'}}>

        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className=" row navbar-nav mr-auto mt-2 mt-lg-0">
            <li className=" col nav-item active" >
              <div className="d-flex justify-content-end">
            <button className='btn btn-primary ms-auto'style={{ width: '150px'}}>
              <Link className="nav-link" to={'/Adminaddflight'}>Add-flight</Link>
              </button>
              </div>
              </li>
              <li className=" col nav-item" >
            <div className="d-flex justify-content-end">
              <button className='btn btn-primary ms-auto'style={{ width: '150px'}}>
              <Link className="nav-link" to={'/Admindeleteflight'}>Delete-flight</Link>
              </button>
              </div>
            </li>
            <li className=" col nav-item " >
            <div className="d-flex justify-content-end">
              <button className='btn btn-primary ms-auto'style={{ width: '150px'}}>
              <Link className="nav-link" to={'/Logout'} >Logout</Link>
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
