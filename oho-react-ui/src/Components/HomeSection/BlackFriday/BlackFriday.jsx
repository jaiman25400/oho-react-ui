import React from 'react';
import SaleImg from "./SaleImg.png";
const BlackFriday = () => {
    return (
        <>
            <div className="BlackFriday-Wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8"><div>
                            <img src={SaleImg} width="870px" className="BlackFirdaySale-Img" alt="Sale Img" />
                        </div></div>
                        <div className="col-xl-4 BlackFriday-Sale">
                            <div className="BlackFriday-Sale-Title">
                                <h1 className="text-white">CLEARANCE SALE</h1>
                                <h1 className="text-warning">Upto 60% Off</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlackFriday;
