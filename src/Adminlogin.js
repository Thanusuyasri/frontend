import React, { Component } from 'react'
import axios from 'axios'
import "./Login.css"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import Navebar from './Navebar'
export default class Adminlogin extends Component {
     constructor(){
        super()
        this.state={username:"",password:"",result:"",err:""}
    }
    handleuser=(e)=>{
        this.setState({username:e.target.value})
        let cn = /^[a-zA-Z]+$/;
        let un = document.getElementById("un");
            if(cn.test(this.state.username)){ 
                un.innerHTML = '<p></p>'
            }
            else{
                un.innerHTML = '<p>Enter valid name</p>'
            }
    }
    handlepassword=(e)=>{
        this.setState({password:e.target.value})
        let cp = /^[0-9]+[@][0-9]+$/;
        let ps = document.getElementById("ps");
            if(cp.test(this.state.password)){ 
                ps.innerHTML = '<p></p>'
            }
            else{
                ps.innerHTML = '<p>Enter valid password</p>'
            }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/getadmin",this.state)
        .then(result=>{
            this.setState({result:result.data})
            if (result.data.length > 0) {
              this.props.navigate('/Adminviewbooking')
              localStorage.setItem('username',this.state.username);
            }
        })
        .catch(error=>{
            this.setState({err:error})
            document.getElementById("result").innerHTML=error
        })
    }
  render() {
    return (
      <div>
        <Navebar/>
        <div className='container'>
          <div className="row">
            <div className='col-sm-4-offset-4'>
              <form className='border border-primary '>
                <h3 className='text-center mt-5'>Admin Login</h3>
                <div className="align">
            <label>Enter username</label>
            <input type='text' name="user" id="user" onChange={this.handleuser}></input>
            <span id="un" style={{ color: "red" }}></span>
               </div><br />
                <div className="align">
            <label>Enter password</label>
            <input type='password' name="password" id="password" onChange={this.handlepassword}></input>
            <span id="ps" style={{ color: "red" }}></span>
                </div><br/>
                <div className="text-center">
                <button type='submit' className="btn btn-primary text-white bg-primary" onClick={this.handlesubmit}>submit</button>
                </div><br/>
              </form>
            </div>
          </div> 
      </div>
      </div>
    )
  }
}
export function Ad(props){
  const navigate=useNavigate()
  return(<Adminlogin navigate={navigate}></Adminlogin>)
}