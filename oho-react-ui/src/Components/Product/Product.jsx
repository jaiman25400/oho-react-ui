import React from 'react';
import TitanicImg from "./Titanic.png";
import BaseballImg from "./Baseball.png";
import KoreanImg from "./Korean.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import ScreenOne from "./screenOne.jpg";
import ScreenTwo from "./ScreenTwo.jpeg";
import "./Product.css";
const Product = () => {
    return (
        <>
            <div className="container Product-Container">
                <div className="row Product-row-first">
                    <div className="mt-4">
                        <h6 className="text-white">HOME <MdKeyboardArrowRight /> Product <MdKeyboardArrowRight /> XYZ <MdKeyboardArrowRight /> Product Name</h6>
                    </div>
                    <div className="mt-4">
                        <h5 className="text-white">Product Name</h5>
                        <p className="Product-rating-stars mt-3"><AiFillStar size="23" /><AiFillStar size="23" /><AiFillStar size="23" /><AiFillStar size="23" /><AiFillStar size="23" /> <span className="text-white mt-1">Read Reviews(267)</span></p>
                    </div>
                </div>
                <div className="row Product-row-Second">
                    <div className="col-xl-7">
                        <div>
                            <img src={ScreenOne} width="740px" />
                        </div>
                        <div className="row Product-image-caro-lists p-0">
                            <div className="col-xl-3">
                                <div>
                                    <img src={ScreenTwo} width="160" />
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div>
                                    <img src={ScreenTwo} width="160" />
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div>
                                    <img src={ScreenTwo} width="160" />
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div>
                                    <img src={ScreenTwo} width="160" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="Product-ImgCaro-Desc">
                            <div className="row Product-ImgCaro-Desc-row-one">
                                <div className="col-xl-9">
                                    <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                                <div className="col-xl-3">
                                    <h6>$699</h6>
                                </div>
                            </div>
                            <div className="row Product-ImgCaro-Desc-row-two">
                                <div className="text-white text-start"><h5>Colour: Pink</h5></div>
                                <div className="row mt-3">
                                    <div className="color-palet-one"></div>
                                    <div className="color-palet-two"></div>
                                    <div className="color-palet-three"></div>
                                    <div className="color-palet-four"></div>

                                </div>
                                <div className="row mt-4">
                                    <div className="col-xl-3 text-start">
                                        <select className="add-to-bag-select">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="text-start">
                                            <button className="btn Add-to-bag btn-warning">Add to Bag</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Product-ImgCaro-Desc-wrap">
                            <div className="row Product-ImgCaro-Desc-row-three">
                                <div className="col-xl-4"><div><button className="btn btn-lg btn-dark">DESCRIPTION</button></div></div>
                                <div className="col-xl-4"><div><button className="btn btn-lg text-white">DIMENSION</button></div></div>
                                <div className="col-xl-4"><div><button className="btn btn-lg text-white">DETAILS</button></div></div>
                            </div>
                            <div className="text-start">
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            </div>

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

export default Product;
