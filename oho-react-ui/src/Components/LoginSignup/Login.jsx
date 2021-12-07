import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="Login-Main-Wrap">
                    <div className="row">
                        <div className="Login-Title"><h3 className="text-white">Sign Up</h3></div>
                    </div>
                    <div className="row Signup-row-two text-start text-white">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control Signup-form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control Signup-form-control mt-3" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check mt-4">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Remind Me</label>
                                    </div>
                                    <div className="col-xl-4">
                                        <a className="Forget-pass-text">Forget Password?</a>
                                    </div>
                                </div>

                            </div>
                            <button type="submit" className="btn Login-btn"><h6>Login</h6></button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
