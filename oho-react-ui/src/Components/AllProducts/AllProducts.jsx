import React from 'react';
import "./AllProducts.css";
import CapImg from "./Image/Cap.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
// import { MdKeyboardArrowRight } from "react-icons/md";

const AllProducts = () => {
    return (
        <>
            <div className="container">
                <div className="All-Products-Page-Wrap">
                    <div className="row Products-Page-Row-One">
                        <div>
                            <p className="text-white">Home<MdKeyboardArrowRight /> Living <MdKeyboardArrowRight /> Room Sofas</p>
                        </div>
                    </div>
                    <div className="row Products-Page-Row-Two">
                        <div className="col-xl-3 Product-list-filter-col-one">
                            <div>
                                <div>
                                    <h5 className="text-start text-white">Filter By</h5>
                                </div>
                                <div className="Filter-Wrap-main mt-4 pt-4">
                                    <h5 className="text-start mb-4">Price</h5>
                                    <div className="text-start">
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $150 - $250</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(11)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $250 - $350</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(74)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $350 - $550</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(98)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $550 - $850</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(21)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $850 - $1000</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(111)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> $1000 - $1250</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(54)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="Filter-Wrap-main-two mt-4 pt-3">
                                    <h5 className="text-start mb-4">Actors</h5>
                                    <div className="text-start">
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in">Series</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(11)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in">Movies</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(74)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in">Youtube</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(98)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> Instagram</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(21)</p>
                                            </div>

                                        </div>
                                        <div className="row checkbox-row-wrap">
                                            <div className="col-xl-1">
                                                <input type="checkbox" className="Product-filter-checkbox" name="my-checkbox" id="opt-in" />
                                            </div>
                                            <div className="col-xl-9">
                                                <label for="opt-in"> Tv</label>
                                            </div>
                                            <div className="col-xl-2">
                                                <p className="">(111)</p>
                                            </div>
                                        </div>
                                        <div className="row w-50">
                                            <a href="#" className="text-white">Show More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-9 p-4">
                            <div className="row">
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 mt-4">
                                    <div className="Product-card-wrap">
                                        <div class="card AllProducts-card">
                                            <img class="card-img-top" src={CapImg} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <div className="row">
                                                        <div className="col-xl-6"><p className="text-start text-white">Product</p></div>
                                                        <div className="col-xl-6"><p className="text-end text-warning">$600</p></div>

                                                    </div></h5>
                                                <p class="card-text text-start text-white">Description</p>
                                                <p class="card-text Products-card-card-text"><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /><AiFillStar size="25" /></p>

                                                <a href="#" class="btn Products-AddToCart-btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <div className="row pagination-row">
                                    <div class="pagination">
                                        <a href="#">&laquo;</a>
                                        <a href="#">1</a>
                                        <a class="active" href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">4</a>
                                        <a href="#">5</a>
                                        <a href="#">6</a>
                                        <a href="#">&raquo;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts;