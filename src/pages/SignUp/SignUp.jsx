import React from "react";
import "./styles.css";
import Logo from "../.././images/heart.png";
const SignUp = () => {
    return (
        <div className="container center">
            <div className="sign-up">
                <div className="image-logo">
                    <img src={Logo} alt="logo" className="logo"></img>
                </div>
                <form>
                    <div className="info">
                        <input type="text" placeholder="Tên người dùng" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Số điện thoại" />
                        <input type="password" placeholder="Mật khẩu" />
                        <input
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                        />
                    </div>
                    <div className="center">
                        <a href="#!" className="btn">
                            Đăng ký
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
