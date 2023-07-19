import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
const Single = () => {

    
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="childImage"></img>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">

                                <lable htmlFor="fileuploadId"></lable>
                                <input id="fileuploadId" type="file" style={{ "border-bottom": "none" }}></input>

                            </div>
                            <div className="formInput">
                                <lable>username</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>password</lable>
                                <input type="password" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>address</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>email</lable>
                                <input type="email" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>phoneno</lable>
                                <input type="number" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>colony</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>
                            <div className="formInput">
                                <lable>ward</lable>
                                <input type="text" placeholder="Akash"></input>
                            </div>

                            <button>Save</button>
                        </form>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Single
