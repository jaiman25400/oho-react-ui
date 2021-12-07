import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { AiOutlineGooglePlus, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "./Logo.png";

const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="row Footer-Main-row">
                    <div className="col-xl-5">
                        <div className="row Footer-row-one">
                            <div className="col-xl-4">
                                <h5>Featured</h5>
                            </div>
                            <div className="col-xl-4">
                                <h5>Discover</h5>
                            </div>
                            <div className="col-xl-4">
                                <h5>Cart</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row Footer-row-two">
                            <div className="col-xl-4">
                                <h5>About</h5>
                            </div>
                            <div className="col-xl-4">
                                <h5>Blog</h5>
                            </div>
                            <div className="col-xl-4">
                                <h5>Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row Social-Icons-row">
                    <div className="col-xl-3">
                        <div className="Social-icons-wrap"><AiOutlineGooglePlus size="25" /></div>
                    </div>
                    <div className="col-xl-3">
                        <div className="Social-icons-wrap"><AiFillInstagram size="25" /></div>
                    </div>
                    <div className="col-xl-3">
                        <div className="Social-icons-wrap"><AiOutlineTwitter size="25" /></div>
                    </div>
                    <div className="col-xl-3">
                        <div className="Social-icons-wrap"><GrFacebookOption size="25" /></div>
                    </div>
                </div>
                <div className="row Footer-last-row">
                    <div className="col-xl-6">
                        <p>© 2010 — 2020</p>
                    </div>
                    <div className="col-xl-6">
                        <p>Privacy — Terms</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;
