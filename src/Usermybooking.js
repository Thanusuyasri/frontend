import React, { Component } from 'react';
import axios from 'axios';
import Navebarwithusername from './Navebarwithusername';

export default class Usermybooking extends Component {
  constructor() {
    super();
    this.state = {
      username: localStorage.getItem('username'),result: []};
  }

  componentDidMount() {
    axios.post('http://localhost:5000/mybooking', this.state)
      .then((result) => {
        this.setState({ result: result.data });
      })
      .catch((error) => {
        console.log('Error:', error);
        this.setState({ err: error });
      });
  }

  render() {
    const { result } = this.state;

    return (
      <div>
        <Navebarwithusername />

        {result && result.length>0? (
          <table className="table" style={{ marginTop: '100px', marginLeft: '10px', marginRight: '10px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Flight Number</th>
                <th>Airline Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {result.map((booking) => (
                <tr >
                  <td>{booking.name}</td>
                  <td>{booking.Age}</td>
                  <td>{booking.flightnumber}</td>
                  <td>{booking.airlinename}</td>
                  <td>{booking.source}</td>
                  <td>{booking.destination}</td>
                  <td>{booking.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    );
  }
}
