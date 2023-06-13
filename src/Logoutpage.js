import React, { Component } from 'react'
import Navebar from './Navebar'
import Frontpage from './Frontpage';
export default class Logoutpage extends Component {
    componentDidMount() {
        localStorage.removeItem('username');
      }

  render() {
    return (
      <div>
        <Frontpage/>
      </div>
    )
  }
}
