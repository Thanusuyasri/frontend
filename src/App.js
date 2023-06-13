import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Loginpage,{Lo} from './Loginpage';
import Adminlogin,{Ad} from './Adminlogin';
import SignUp,{Sn} from './SignUp';
import Admindeleteflight,{De} from './Admindeleteflight';
import Adminaddflight,{Add} from './Adminaddflight';
import Usersearchflight from './Usersearchflight';
import UserBookingflight,{Ub} from './UserBookingflight';
import Frontpage from './Frontpage';
import Selectallflightdata from './Selectallflightdata';
import logo from './logo.svg';
import Adminviewbooking from './Adminviewbooking';
import Logoutpage from './Logoutpage';
import './App.css';
import Usermybooking from './Usermybooking';

function App() {
  return (
    <div>
    <Router>
      
      
      <Routes>
      <Route exact path="/" element={<Frontpage/>} />
        <Route path="/login" element={<Lo />} />
        <Route path="/signup" element={<Sn />} />
        <Route path="/adminlogin" element={<Ad />} />
        <Route path="/booking" element={<Ub />} />
        <Route path="/userflight" element={<Usersearchflight />} />
        <Route path="/Admindeleteflight" element={<De />} />
        <Route path="/Adminaddflight" element={<Add />} />
        <Route path="/Adminviewbooking" element={<Adminviewbooking />} />
        <Route path="/Mybooking" element={<Usermybooking />} />
        <Route path="/Logout" element={<Logoutpage />} />
        <Route path="/allflight" element={<Selectallflightdata />} />
      </Routes>
      {/* <Usersearchflight/> */}
    </Router>
    </div>

  );
}

export default App;
