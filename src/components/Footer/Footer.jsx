import React from "react";
import "./FooterStyle.css";
import Logo from "../.././images/heart.png";
import Facebook from "../.././images/Facebook-icon.svg";

import Linkedin from "../.././images/Linkedin-icon.svg";
import Twitter from "../.././images/Twitter-icon.svg";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="footer-top center">
                        <div className="footer-content">
                            <h2>Bắt đầu ngay hôm nay!</h2>
                            <p>
                                Lên kế hoạch và quản lý tất cả mọi thứ ngay từ
                                bây giờ với nhóm của bạn hoặc cho riêng bạn
                            </p>
                            <div className="center">
                                <a href="#!" className="btn">
                                    Bắt đầu
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div>
                            <img src={Logo} alt="" className="logo"></img>
                        </div>
                        <div className="content">
                            <div className="row row-top">
                                <div className="column">
                                    <p>Sản phẩm của TC_X08_N01</p>
                                    <p>Thiết kế bởi ...</p>
                                </div>

                                <div className="column">
                                    <h3 className="heading">Tài nguyên</h3>
                                    <ul className="list">
                                        <li className="item">
                                            <a href="">Sản phẩm</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Tài liệu - eBooks</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Tin tức</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Sự kiện</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="column">
                                    <h3 className="heading">Khám phá</h3>
                                    <ul className="list">
                                        <li className="item">
                                            <a href="">Giới thiệu</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Thành tích nổi bật</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Hợp tác</a>
                                        </li>
                                        <li className="item">
                                            <a href="">Liên hệ</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="column">
                                    <h3 className="heading">Kết nối</h3>

                                    <div className="social">
                                        <a href="" className="social-link">
                                            <img src={Facebook} alt=""></img>
                                        </a>
                                        <a href="" className="social-link">
                                            <img src={Twitter} alt=""></img>
                                        </a>
                                        <a href="" className="social-link">
                                            <img src={Linkedin} alt=""></img>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-bottom">
                                <p className="copyright">
                                    Copyright 2020.com, All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
