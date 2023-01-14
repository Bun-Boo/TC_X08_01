import React from "react";
import "./styles.css";
import Logo from "../.././images/heart.png";

const SignIn = () => {
    return (
        <div className="container center">
            <div className="sign-in">
                <div className="image-logo">
                    <img src={Logo} alt="logo" className="logo"></img>
                </div>
                <form>
                    <div className="info">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="center">
                        <a href="#!" className="btn">
                            Đăng Nhập
                        </a>
                    </div>
                </form>

                <p>
                    Chưa có tài khoản?
                    <a href="#">Đăng ký</a>
                </p>

                <div>
                    <p className="or">hoặc</p>
                    <span className="line-left"></span>
                    <span className="line-right"></span>
                </div>

                <div className="btn-social center">
                    <a href="#" className="btn">
                        Đăng nhập bằng Google
                    </a>
                    <a href="#" className="btn">
                        Đăng nhập bằng Facebook
                    </a>
                    <a href="#" className="btn">
                        Đăng nhập bằng Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
