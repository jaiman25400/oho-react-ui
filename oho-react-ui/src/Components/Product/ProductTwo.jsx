import React from 'react';
import TitanicImg from "./Titanic.png";
import BaseballImg from "./Baseball.png";
import KoreanImg from "./Korean.png";
import ProductImg from "./ProductTwo.jpg";
import ProductRowImg from "./ProductRowImg.jpg";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiShoppingBag2Line } from "react-icons/ri";
const ProductTwo = () => {
    return (
        <>
            <div className="container Product-Two-Container">
                <div className="row">
                    <div className="col-xl-1">
                        <div className="Product-row-image">
                            <div className="">
                                <img src={ProductRowImg} width="80" />
                            </div>
                            <div className="mt-4">
                                <img src={ProductRowImg} width="80" />
                            </div>
                            <div className="mt-4">
                                <img src={ProductRowImg} width="80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 text-start">
                        <div className="">
                            <img src={ProductImg} width="400px" alt="asdf" />
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="ProductTwo-Desc">
                            <div className="row text-start">
                                <h6><BsArrowLeftShort size="30" /> Back</h6>
                                <h1 className="text-white">Product</h1>
                                <p className="mt-2 text-white">seller</p>
                                <div>
                                    <h6 className="mt-2">Details</h6>
                                    <p className="mt-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="ProductTwo-Desc-Two text-start">
                            <h4 className="text-white">$699</h4>
                            <p className="text-white mt-4"><HiOutlineLocationMarker size="20" /> Ship from New York</p>
                            <p className="text-white"><RiShoppingBag2Line size="20" /> Estimated to ship</p>
                            <button className="btn btn-lg btn-warning w-75">Add To Cart</button>
                            <p className="text-secondary mt-2">Taxes and shipping fee will apply upon checkout</p>
                        </div>
                    </div>
                </div>
                <div className="row Product-row-Third">
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

export default ProductTwo;
