import React from "react";
import "./HeaderHomeStyle.css";
import { FaGlobe } from "react-icons/fa";
import Logo from "../.././images/heart.png";

const HeaderHome = () => {
    return (
        <header className="fixed-header">
            <div className="content">
                <nav className="navbar">
                    <div>
                        <img src={Logo} aLt="logo" className="logo"></img>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <a href="#">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#">Tính năng</a>
                            </li>
                            <li>
                                <a href="#">Tài liệu</a>
                            </li>

                            <li>
                                <a href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="actions center">
                        <div className="action-lang center">
                            <FaGlobe />
                            <a href="#" className="">
                                VI
                            </a>
                        </div>

                        <a href="#!" className="btn action-btn">
                            Đăng ký
                        </a>
                        <a href="#!" className="btn action-btn">
                            Đăng nhập
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderHome;
