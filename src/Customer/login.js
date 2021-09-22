// css import
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/font-awesome.css";
import "./login.css";

//js file import
// import $ from "jquery";

// import { Link } from 'react-router-dom';
// import Header from './Compo/header';
// import Footer from './Compo/footer';
// import Home from './Compo/home';
// import About from './Compo/about';
// import Contact from './Compo/contact';


function Login() {
    const loginClick = () => {
        document.getElementById("login-tab").classList.add("active");
        document.getElementById("login").classList.add("active");
        document.getElementById("newuser-tab").classList.remove("active");
        document.getElementById("newuser").classList.remove("active");
    }
    const regClick = () => {
        document.getElementById("login-tab").classList.remove("active");
        document.getElementById("login").classList.remove("active");
        document.getElementById("newuser-tab").classList.add("active");
        document.getElementById("newuser").classList.add("active");
    }
    return (
        <div>
            <div className="container-fluid register">
                <div className="row">
                    <div className="col-md-4 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>Start Journey With JustDrive!</p>
                    </div>
                    <div className="col-md-8 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <div className="nav-link active" id="login-tab" data-toggle="tab" role="tab" aria-controls="login" aria-selected="true" onClick={loginClick}>Login</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="newuser-tab" data-toggle="tab" role="tab" aria-controls="newuser" aria-selected="false" onClick={regClick}>New User</div>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <h3 className="login-heading">Login</h3>
                                <div className="row register-form">
                                    <div className="col-md-12 profile_card">
                                        <form className="form my-form">
                                            <div className="form-group my-row">
                                                <i className="fa fa-envelope-o ico"></i>
                                                <input type="text" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group my-row">
                                                <i className="fa fa-lock ico"></i>
                                                <input type="password" className="form-control" placeholder="Password *" />
                                            </div>
                                            <div className="float-right">
                                                <input type="submit" className="btn btn-primary" value="Login" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="newuser" role="tabpanel" aria-labelledby="newuser-tab">
                                <h3 className="register-heading">New User</h3>
                                <form className="row register-form my-reg-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div className="float-right">
                                            <input type="submit" className="btn btn-primary" value="Register" />
                                        </div>
                                        <br />
                                        <div className="form-group" style={{ fontSize: '12px' }}>
                                            <a href="#" className="form">Forgot Password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
