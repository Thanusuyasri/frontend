import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navebarwithusername from './Navebarwithusername';
import UserBookingflight from './UserBookingflight';

export default class Usersearchflight extends Component {
  constructor() {
    super();
    this.state = {date: '',time: '',airlinename:"",source:"",destination:"",av: '',result: [],err: '',flightnumber:"" };
  }

  handledate = (e) => {
    this.setState({ date: e.target.value });
    // localStorage.setItem('date',this.state.date);
  };

  handletime = (e) => {
    this.setState({ time: e.target.value });
    let ct = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    let tn = document.getElementById("tn");
    
    if (ct.test(this.state.time)) {
      tn.innerHTML = '<p></p>';
    } else {
      tn.innerHTML = '<p>Enter valid time</p>';
    }
    // localStorage.setItem('time',this.state.time);
  };

  handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/usersearchflight', this.state)
      .then((result) => {
        this.setState({ result: result.data });
      })
      .catch((error) => {
        this.setState({ err: error });
        // document.getElementById('result').innerHTML = error;
      });
  };

  

  render() {
    const { result} = this.state;
    return (
      <div>
        <Navebarwithusername />
        <div className="row" style={{marginTop:"50px",marginLeft:"150px"}}>
  <div className="col-4">
    <label>Enter Date</label>
          <input type="date" name="date" id="date" style={{ width: '150px' }} onChange={this.handledate} />
  </div>
  <div className="col-4">
    <label>Enter Time</label>
          <input type="text" name="time" id="time" style={{ width: '150px' }} onChange={this.handletime} />
          <span id="tn" style={{ color: "red" }}></span>
  </div>
  <div className="col-4">
          <button type="submit" onClick={this.handlesubmit}>
      submit
    </button>
  </div>
</div>
        {result && result.length>0? (
          <table className="table" style={{marginTop:"100px",marginLeft:"10px",marginRight:"10px"}}>
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Airline Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Available Seat</th>
                <th>Book now</th>
              </tr>
            </thead>
            <tbody>
              {result.map((a) => (
                <tr key={a.flightnumber}>
                  <td>{a.flightnumber}</td>
                  <td>{a.airlinename}</td>
                  <td>{a.source}</td>
                  <td>{a.destination}</td>
                  <td>{a.setavailable}</td>
                  <td>
                    <button onClick={()=>{
                        this.setState({flightnumber:a.flightnumber,airlinename:a.airlinename,destination:a.destination,source:a.source})
                        localStorage.setItem('flightnumber',a.flightnumber);
                        localStorage.setItem('airlinename',a.airlinename);
                        localStorage.setItem('destination',a.destination);
                        localStorage.setItem('source',a.source);
                        localStorage.setItem('date',a.date);
                    }}><a href="/booking">Book Now</a></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}


