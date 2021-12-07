import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";
const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row Header-main-row">
                    <div className="col-xl-3">
                        <div className="Header-logo">
                            <h3 className="text-white">OHO</h3>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="row text-white">
                            <div className="col">
                                <p>FEATURED</p>
                            </div>
                            <div className="col">
                                <p>DISCOVER</p>
                            </div>
                            <div className="col">
                                <p>ABOUT US</p>
                            </div>
                            <div className="col">
                                <p>CONTACT</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="row Header-icons-wrap-row">
                            <div className="col">
                                <p className="text-white"><AiOutlineShoppingCart size="25" /></p>
                            </div>
                            <div className="col">
                                <p className="text-white"><FaUserCircle size="25" /></p>
                            </div>
                            <div className="col">
                                <p className="text-white"><MdOutlineManageSearch size="25" /></p>
                            </div>
                        </div>
                    </div></div>
            </div>
        </>
    )
}

export default Header;
