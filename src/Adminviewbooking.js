import React, { Component } from 'react'
import axios from 'axios'
import Navebarforadmin from './Navebarforadmin';
export default class Adminviewbooking extends Component {
     constructor(){
        super()
        this.state={date:"",time:"",flightnumber:"",result:[],err:""}
    }
    handledate=(e)=>{
        this.setState({date:e.target.value})
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
        axios.post("http://localhost:5000/viewbooking",this.state)
        .then(result=>{
            this.setState({result:result.data})
        })
        .catch(error=>{
            this.setState({err:error})
            console.log(error)
            // document.getElementById("result").innerHTML=error
        })
    }
  render() {
    const { result} = this.state;
    return (
      <div>
        <div>
        <Navebarforadmin />
        <div className="row" style={{marginTop:"50px",marginLeft:"150px"}}>
  <div className="col-4">
    <label>Enter Flight Number</label>
          <input type='text' name="flightnumber" id="flightnumber" onChange={this.handleflightnumber} style={{ width: '150px' }}  />
          <span id="fn" style={{ color: "red" }}></span>
  </div>
  <div className="col-4">
    <label>Enter Date</label>
          <input type='date' name="date" id="date" onChange={this.handledate} style={{ width: '150px' }}  />
  </div>
  
  <div className="col-4">
    <label>Enter Time</label>
          <input type='text' name="time" id="time" onChange={this.handletime} style={{ width: '150px' }}  />
          <span id="tn" style={{ color: "red" }}></span>
  </div>
  <div className="col-4" style={{marginTop:"50px",marginLeft:"450px"}}>
          <button type='submit' onClick={this.handlesubmit}>
      submit
    </button>
  </div>
</div>
        { result && result.length >0 ? (
          <table className="table" style={{marginTop:"100px",marginLeft:"10px",marginRight:"10px"}}>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {result.map((a) => (
                <tr key={a.name}>
                  <td>{a.usreid}</td>
                  <td>{a.name}</td>
                  <td>{a.Age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      </div>
    )
  }
}
