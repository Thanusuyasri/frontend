import React, { Component } from 'react';
import Flights from './Flights.jpeg';
import { Link } from 'react-router-dom'
import Navebar from './Navebar';
export default class Frontpage extends Component {
  render() {
    return (
      <div >
        <Navebar/>
        <div className='row'>            
        <div className='col-sm-6' style={{ marginTop: '30px'}}>
            <div style={{marginLeft: '20px'}}>
          <img src={Flights} alt="Image" className="img-fluid" />
          </div>
        </div>
        <div className='col-sm-6' style={{ marginTop:'200px'}}>
            <div className='row-sm-4'style={{ marginLeft: '100px',marginRight: '100px'}} >
                <h3 style={{ marginLeft: '30px'}} >Flight To Your Imagination </h3>
                <h5>Secure and Safe Journeys Await! May Your Entire Trip Be Happy. Get Ready to Enjoy Your Journey! Login or Signup to Discover More.</h5>
            </div>
        </div>
      </div>
      </div>
    );
  }
}
