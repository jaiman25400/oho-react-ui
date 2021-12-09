import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./Background.png";
const BestValueProduct = () => {
    return (
        <>
            <div className="container">
                <div className="row BestProduct-Main-Row">
                    <div className="BestProduct-Title-Wrap">
                        <div className="BestProduct-Title">
                            <h1 className="text-white">Your Best Value Products</h1>
                        </div>
                        <div className="mt-4">
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div><button className="btn BestProduct-Btn">SHOP NOW</button></div>
                    </div>
                </div>
                <div className="row">
                    <div className="BestProduct-Second-Row">
                        <img src={Background} alt="bgImgae" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestValueProduct;
