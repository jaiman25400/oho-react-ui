import React from 'react';
import "./LoginSignup.css";

const Signup = () => {
    return (
        <>
            <div className="container">
                <div className="Signup-Main-Wrap">
                    <div className="row">
                        <div className="Signup-Title"><h3 className="text-white">Sign Up</h3></div>
                    </div>
                    <div className="row Signup-row-two text-start text-white">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First name</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputEmail1">Last name</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputEmail1">Phone</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputEmail1">ID card</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">Country</label>
                                <input type="password" className="form-control Signup-form-control mt-3" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">City</label>
                                <input type="password" className="form-control Signup-form-control mt-3" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control Signup-form-control mt-3" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">Repeat Password</label>
                                <input type="password" className="form-control Signup-form-control mt-3" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check mt-4">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I agree with <span className="Terms-text">Terms and Privacy</span></label>
                            </div>
                            <button type="submit" className="btn Signup-btn"><h6>Signup</h6></button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup;
