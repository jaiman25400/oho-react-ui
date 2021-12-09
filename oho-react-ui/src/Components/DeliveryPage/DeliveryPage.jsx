import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
import "./DeliveryPage.css";
const DeliveryPage = () => {
    return (
        <>
            <div className="container Delivery-Container">
                <div className="row">
                    <div className="Wrap">
                        <h6 className="text-warning text-start"><BsArrowLeft size="30" /> <span className="text-white">Cart</span></h6>
                    </div>
                </div>
                <div className="Delivery-Page-Wrap">
                    <div className="Delivery-title-wrap">
                        <h4>Select Your Delivery Information <span className="Percentage-text"> 40%</span></h4>
                    </div>
                    <div className="Delivery-form-wrap">

                        <form className="Delivery-form">
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country/ Region" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Street Address" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State / Province /Region" />
                            </div>
                            <div class="form-group">
                                <input type="email" className="form-control Delivery-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip / Postal Code" />
                            </div>
                            <div class="form-group mt-4">
                                <input type="password" className="form-control Delivery-form-control mt-3" id="exampleInputPassword1" placeholder="Mobile" />
                            </div>
                            <div class="form-check mt-4 text-start">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Set as default</label>
                            </div>
                            <button type="submit" className="btn Delivery-btn"><h6>Save and Ship to This Address</h6></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryPage;
