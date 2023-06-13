import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navebarwithusername from './Navebarwithusername';

export default class Selectallflightdata extends Component {
    constructor() {
        super();
        this.state = {
          result: [],
          err: '',
        };
      }
      componentDidMount() { 
        axios.post('http://localhost:5000/allsflight', this.state)
        .then((result) => {
        this.setState({ result: result.data });
        })
        .catch((error) => {
          this.setState({ err: error });
        //   document.getElementById('result').innerHTML = error;
        });
      }
    
  render() {
     const { result } = this.state;
    return (
      <div>
        <Navebarwithusername />
        {result.length>0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Airline Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Available Seat</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    )
  }
}
