import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import Navebarwithusername from './Navebarwithusername';
export default class UserBookingflight extends Component {
     constructor(){
        super()
        this.state={name:"",age:0,airlinename:"",source:"",destination:"",date:"",flightnumber:"",result:"",err:"",usreid:""}
    }
    componentDidMount() {
        const airlinename = localStorage.getItem('airlinename');
        const source = localStorage.getItem('source');
        const destination = localStorage.getItem('destination');
        const date = localStorage.getItem('date');
        const flightnumber = localStorage.getItem('flightnumber');
        const usreid=localStorage.getItem('username');
      
        this.setState({airlinename: airlinename ,source: source ,destination: destination ,date: date ,flightnumber: flightnumber,usreid:usreid});
      }
      
    handlepname=(e)=>{
        this.setState({name:e.target.value})
        let cname = /^[a-zA-Z.]+$/;
        let pn = document.getElementById("pn");
            if(cname.test(this.state.name)){ 
                pn.innerHTML = '<p></p>'
            }
            else{
                pn.innerHTML = '<p>Enter valid name</p>'
            }
    }
    handleage=(e)=>{
        this.setState({age:e.target.value})
        let cname = /^\S[0-9]{0,3}$/;
        let pn = document.getElementById("ag");
            if(cname.test(this.state.age)){ 
                pn.innerHTML = '<p></p>'
            }
            else{
                pn.innerHTML = '<p>Enter valid Age</p>'
            }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/Bookflig",this.state)
        .then(result=>{
            this.setState({result:result.data})
            alert("Booking Has be confirmed Auccessfully")
            this.props.navigate('/allflight')
            // document.getElementById("result").innerHTML=result.data
        })
        .catch(error=>{
            this.setState({err:error})
            console.log(error)
            // document.getElementById("result").innerHTML=error
        })
    }
  render() {
    return (
      <div>
        <Navebarwithusername/>
        <div>
            <div style={{marginTop:"50px",marginLeft:"450px"}}>
            <label>Enter Passenger Name</label>
            <input type='text' name="pname" id="pname"  style={{ width: '250px',marginLeft:"50px" }} onChange={this.handlepname}></input>
            <span id="pn" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"50px",marginLeft:"450px"}}>
            <label>Enter Age </label>
            <input type='text' name="age" id="age"  style={{ width: '250px',marginLeft:"135px" }} onChange={this.handleage}></input>
            <span id="ag" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"50px",marginLeft:"550px"}}>
            <button type='submit' onClick={this.handlesubmit}>Confirm your Ticket</button>
            </div>
            </div>
      </div>
    )
  }
}
export function Ub(props){
    const navigate=useNavigate()
    return(<UserBookingflight navigate={navigate}></UserBookingflight>)
  }