import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TitanicImg from "./Image/Titanic.png";
import BaseballImg from "./Image/Baseball.png";
import KoreanImg from "./Image/Korean.png";
const InStoreProduct = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="InStroreProduct-Title">
                        <h1>Looking for What’s New in Store?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div>
                            <div class="card InStoreProduct-Card">
                                <img class="card-img-top" src={TitanicImg} alt="Card image cap" />
                                <div class="card-body mt-3 p-0">
                                    <h5 class="card-title">Product</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="card-body mt-3 p-0">
                                    <a href="#" class="card-link text-white">Take a Look</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div>
                            <div class="card InStoreProduct-Card">
                                <img class="card-img-top" src={BaseballImg} alt="Card image cap" />
                                <div class="card-body mt-3 p-0">
                                    <h5 class="card-title">Product</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="card-body mt-3 p-0">
                                    <a href="#" class="card-link text-white">Take a Look</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div>
                            <div class="card InStoreProduct-Card">
                                <img class="card-img-top" src={KoreanImg} alt="Card image cap" />
                                <div class="card-body mt-3 p-0">
                                    <h5 class="card-title">Product</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="card-body mt-3 p-0">
                                    <a href="#" class="card-link text-white">Take a Look</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default InStoreProduct;
