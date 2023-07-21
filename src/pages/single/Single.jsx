import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
const Single = () => {


    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />

                <div className="top">
               
                <div className="left">

                <h1>Information</h1>
                    <img className="cellImage" src="https://www.tvinsider.com/wp-content/uploads/2017/05/GettyImages-648935262-1014x570.jpg" alt=""/>
                </div>
                
                <div className="details">

                    user details 
                </div>
                
                <div className="right">
                </div>
            </div>
               
                <div className="bottom">
                 
                </div>


            </div>
        </div>
    )
}

export default Single
