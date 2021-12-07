import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import GirlImg from "./Image/Girl.png";
import Ball from "./Image/Ball.png";
import Board from "./Image/Board.png";
import Gitar from "./Image/Gitar.png";
const ProductList = () => {
    return (
        <>
            <div className="container">
                <div className="ProductList-Title">
                    <h1 className="text-warning">Get some Inspiration from our refreshing ideas</h1>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="bg-transparent">
                            <div className="card ProductList-Card">
                                <img className="card-img-top" src={GirlImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Product</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link text-white">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <div class="card ProductList-Card">
                                <img class="card-img-top" src={Ball} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Product</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link text-white">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <div class="card ProductList-Card">
                                <img class="card-img-top" src={Board} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Product</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link text-white">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <div class="card ProductList-Card">
                                <img class="card-img-top" src={Gitar} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Product</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link text-white">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;
