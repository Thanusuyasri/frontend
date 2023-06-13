import React, { Component } from 'react'
import axios from 'axios'
import Navebarforadmin from './Navebarforadmin';
import {useNavigate} from "react-router-dom"
export default class Admindeleteflight extends Component {
     constructor(){
        super()
        this.state={airlinename:"",source:"",destination:"",date:"",time:"",flightnumber:"",result:"",err:""}
    }
    handleairlinename=(e)=>{
        this.setState({airlinename:e.target.value})
        let cname = /^[a-zA-Z]+$/;
        let fname = document.getElementById("resname");
            if(cname.test(this.state.airlinename)){ 
                fname.innerHTML = '<p></p>'
            }
            else{
                fname.innerHTML = '<p>Enter valid flight name</p>'
            }
    }
    handlesource=(e)=>{
        this.setState({source:e.target.value})
        let cs = /^[a-zA-Z]+$/;
        let sname = document.getElementById("sn");
            if(cs.test(this.state.source)){ 
                sname.innerHTML = '<p></p>'
            }
            else{
                sname.innerHTML = '<p>Enter valid Source name</p>'
            }
    }
    handledestination=(e)=>{
        this.setState({destination:e.target.value})
        let cs = /^[a-zA-Z]+$/;
        let dname = document.getElementById("dn");
            if(cs.test(this.state.source)){ 
                dname.innerHTML = '<p></p>'
            }
            else{
                dname.innerHTML = '<p>Enter valid destination name</p>'
            }
    }
    handledate=(e)=>{
        this.setState({date:e.target.value})
        alert(this.state.date);
    }
    handletime=(e)=>{
        this.setState({time:e.target.value})
        let ct = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
        let tn = document.getElementById("tn");
        
        if (ct.test(this.state.time)) {
          tn.innerHTML = '<p></p>';
        } else {
          tn.innerHTML = '<p>Enter valid time</p>';
        }
        
    }
    handleflightnumber=(e)=>{
        this.setState({flightnumber:e.target.value})
        let cf = /^[A-Za-z0-9]+$/;
        let fn = document.getElementById("fn");
            if(cf.test(this.state.flightnumber)){ 
                fn.innerHTML = '<p></p>'
            }
            else{
                fn.innerHTML = '<p>Enter valid flightnumber name</p>'
            }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/deleteflight",this.state)
        .then(result=>{
            this.setState({result:result.data})
            alert("Flight Has be deleted Successfully")
            this.props.navigate('/Adminviewbooking')
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
        <Navebarforadmin/>
        <div style={{marginTop:"50px"}}>
        <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Airlinename</label>
            <input type='text' name="airlinename" id="airlinename" style={{ width: '250px',marginLeft:"50px" }} onChange={this.handleairlinename}></input>
            <span id="resname" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Source</label>
            <input type='text' name="source" id="source" style={{ width: '250px',marginLeft:"85px"}} onChange={this.handlesource}></input>
            <span id="sn" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Destination</label>
            <input type='text' name="destination" id="destination" style={{ width: '255px',marginLeft:"50px" }} onChange={this.handledestination}></input>
            <span id="dn" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Date</label>
            <input type='date' name="date" id="date"  style={{ width: '250px' ,marginLeft:"100px"}}onChange={this.handledate}></input>
            </div>
            <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Time</label>
            <input type='text' name="time" id="time"  style={{ width: '250px',marginLeft:"100px" }}onChange={this.handletime}></input>
            <span id="tn" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"10px",marginLeft:"500px"}}>
            <label>Enter Flight Number</label>
            <input type='text' name="flightnumber"  style={{ width: '250px',marginLeft:"30px" }}id="flightnumber" onChange={this.handleflightnumber}></input>
            <span id="fn" style={{ color: "red" }}></span>
            </div>
            <div style={{marginTop:"10px",marginLeft:"650px"}}>
            <button type='submit' onClick={this.handlesubmit}>submit</button>
            </div>
            </div>
      </div>
    )
  }
}
export function De(props){
    const navigate=useNavigate()
    return(<Admindeleteflight navigate={navigate}></Admindeleteflight>)
  }