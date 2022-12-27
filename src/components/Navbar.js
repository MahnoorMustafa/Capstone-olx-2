import React from "react";
import olxLogo from "../assets/olx-blue.jpg";
import olxBigLogo from "../assets/Olx-black.png";
import 'bootstrap/dist/css/bootstrap.css';
import { FaSearch } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from "react-router-dom";

import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Sell from "../assets/Sell.PNG"
function Navbar() {
  return (
   
     <div>

      <nav className="navbar sticky-top navbar-expand-lg bg-light nav">
        <div className="container-fluid">
          <div className="nav-flex">
            <div className="topnav">
              <div className="olxlogo">
                <img src={olxLogo} />
              </div>

              <div className="product-links">
                <DirectionsCarFilledOutlinedIcon className="motorsicon"/>
                <a>MOTORS</a>
                <CorporateFareOutlinedIcon className="propertyicon"/> 
                <a>PROPERTY</a>
              </div>
            </div>
            <div className="midnav">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="olx2-logo">
                  <img src={olxBigLogo} />
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown ">
                    <div className="drop-box">
                    <select class=" form-select-lg mb-3 Location" >
                    
                      <option 
                        className="Location-input"
                        type="text"
                        placeholder="Loation"
                      >Pakistan </option>
                      <option value="1">Azad Kashmir,Pakistan</option>
                      <option value="2">Balochistan,Pakistan</option>
                      <option value="3">Islamabad,Pakistan</option>
                      <option value="4">Khyber Pakhtunkhwa.Pakistan</option>
                      <option value="5">Northern areas,Pakistan</option>
                      <option value="6">Punjab,Pakistan</option>
                      <option value="7">Sindh,Pakistan</option>
                      
                    </select>
                    
                    </div>
                  
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className=" me-2 search-input"
                    type="search"
                    placeholder="Find Cars, Mobile Phones and more..."
                    aria-label="Search"
                  />
                  <button
                    className=" search-button"
                    type="submit"
                  > <SearchRoundedIcon/></button>
                </form>
                <Link to= "/Form" className="loginF">
                <a className="login">Login</a>
                </Link>
                <Link to= "/FormOfSell" className="SellF">
                  <img  src={Sell} className="sell-btn"/>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </nav>
  
         
    </div>
   
  );
}

export default Navbar;
