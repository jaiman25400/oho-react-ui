import React, { useState } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import DummyImg from "./Dummy.jpeg";
import "./ReviewOrder.css";
// import { Modal, Button } from 'bootstrap';
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '550px',
        height: '450px',
        backgroundColor: '#F1D101',
        borderRadius:'10px',
    },
};
// Modal.setAppElement('#yourAppElement');




const ReviewOrder = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

        // subtitle.style.color = '#fddc01';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="container Cart-Container">
                <div className="row">
                    <div className="Wrap">
                        <h6 className="text-warning text-start"><BsArrowLeft size="30" /> <span className="text-white">Cart</span></h6>
                    </div>
                </div>
                {/* WRap start */}
                <div className="Cart-row-wrap mt-4">
                    <div className="text-start Cart-row-one">
                        <div className="mt-4 text-white text-center">
                            <h4>Select Your Delivery Information <span className="Percentage-text"> 70%</span></h4>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xl-4">
                                <h5>Product Name & Details</h5>
                            </div>
                            <div className="col-xl-2"><h5>Quantity</h5></div>
                            <div className="col-xl-2"><h5>Price</h5></div>
                            <div className="col-xl-3"><h5 className="text-center">Delivery Details</h5></div>
                            <div className="col-xl-1"><button onClick={openModal} className="text-end btn cart-close-btn"><IoMdClose size="30" /></button></div>
                        </div>
                    </div>
                    <div className="row Cart-row-two text-start">
                        <div className="col-xl-4">
                            <div className="row">
                                <div className="col-4"><div><img src={DummyImg} alt="Dummy Image" width="120" /></div></div>
                                <div className="col-8">
                                    <div className="text-start">
                                        <h6 className="mt-3">Product</h6>
                                        <h6 className="mt-4">Seller</h6>
                                        <h6>Descriptions</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="cart-product-count-btn">
                                <button className="btn btn-cart-minus">
                                    <h4 className="text-white"><BiMinus size="20" /></h4></button>
                                <h5 className="mt-2"> 2 </h5><button className="btn">
                                    <h4 className="text-white"><BiPlus size="20" /></h4></button>
                            </div></div>
                        <div className="col-xl-2"><h6>#800/</h6><h6>2Pieces</h6></div>
                        <div className="col-xl-3"><div className="Cart-radio-wrap">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    #2000
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Pay On Delivery
                                </label>
                            </div>
                        </div></div>
                        <div className="col-xl-1"></div>
                    </div>
                    <div className="row Cart-row-Three">
                        <div className="Cart-buy-details-checkout">
                            <div className="row">
                                <div className="col-xl-6">
                                    <h6 className="text-secondary">Subtotal: <span className="text-white">#8000</span></h6>
                                </div>
                                <div className="col-xl-6">
                                    <h6 className="text-secondary">Delivery: <span className="text-white">#100</span></h6>
                                </div>
                            </div>
                            <h6 className="mt-4 text-secondary">Total: <span className="text-white">#8100</span></h6>
                            <div className="mt-4">
                                <button className="btn Cart-buy-button"><h6>Next</h6></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WRap end */}
                <div>
                    {/* <button onClick={openModal}>Open Modal</button> */}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        // className="ProductModal"
                        contentLabel="Example Modal"
                    >
                        <div className="Product-Model-Wrap">
                            <div className="text-end"><button className="text-end btn text-dark" onClick={closeModal}><IoMdClose size="35" /></button></div>
                            <div className="text-center Dummy-closeBtn-wrap"><IoMdClose size="70" /></div>
                            <div className="row">
                                <div className="mt-4 text-center">
                                    <h3 className="Remove-cancel-text">Remove / Cancel Order</h3>
                                </div>
                                <div className="Remove-cancel-text-p mt-3">
                                    <h6>You're about to cancel ya order and this will also remove the item from your cart either.</h6>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="btn Modal-proceed-btn">Proceed</button>
                                </div>
                            </div>
                        </div>
                        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                        <button onClick={closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form> */}
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default ReviewOrder
