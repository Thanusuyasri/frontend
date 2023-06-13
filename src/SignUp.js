import React, { Component } from 'react'
import axios from 'axios'
import Navebar from './Navebar'
import "./Signup.css"
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
export default class SignUp extends Component {
    constructor(){
        super()
        this.state={username:"",password:"",email:"",result:"",err:""}
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
    
    handleemail=(e)=>{
        this.setState({email:e.target.value})
        let ce = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let em = document.getElementById("em");
            if(ce.test(this.state.email)){ 
                em.innerHTML = '<p></p>'
            }
            else{
                em.innerHTML = '<p>Enter valid email</p>'
            }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/newuser",this.state)
        .then(result=>{
            this.setState({result:result.data})
            if (result.data.length > 0) {
                this.props.navigate('/allflight')
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
              <form className='border border-primary'>
                <h3 className='text-center mt-5'>Sign Up</h3><br/>
                <div className="align">
                    <label>Enter username</label>
                    <input type='text' name="user" id="user" onChange={this.handleuser}></input>
                    <span id="un" style={{ color: "red" }}></span>
                </div><br/>
                <div className="align">
                    <label>Enter email</label>
                    <input type='email' name="email" id="email" onChange={this.handleemail}></input>
                    <span id="em" style={{ color: "red" }}></span>
                </div><br/>
                <div className="align">
                    <label>Enter password</label>
                    <input type='password' name="password" id="password" onChange={this.handlepassword}></input>
                    <span id="ps" style={{ color: "red" }}></span>
                </div><br/>
                <div className="text-center">
                    <button type='submit'className="btn btn-primary text-white bg-primary"  onClick={this.handlesubmit}>submit</button>
                </div><br/>
                <p className="text-center">Already registered? <Link to={"/login"}>Sign in</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export function Sn(props){
    const navigate=useNavigate()
    return(<SignUp navigate={navigate}></SignUp>)
  }