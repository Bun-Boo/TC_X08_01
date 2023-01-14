import React from "react";
import HeaderHome from ".././.././components/Header/HeaderHome";
import Footer from ".././.././components/Footer/Footer";
import "./styles.css";
import { FiCheck } from "react-icons/fi";
import Hero01 from "../.././images/hero-01.jpg";
import Hero02 from "../.././images/hero-02.jpg";

const HomePage = () => {
    return (
        <div>
            <HeaderHome />
            <div className="hero-wrap">
                <div className="content">
                    <div className="title">
                        <h1>Bạn đang gặp khó khăn trong quản lý thời gian?</h1>
                    </div>

                    <p className="desc">
                        Chúng tôi cung cấp ứng dụng lập lịch, quản lý thời gian,
                        công việc cho cá nhân, tổ chức và hơn thế nữa.
                    </p>

                    <div className="action">
                        <a href="#!" className="btn">
                            Đăng nhập
                        </a>
                    </div>
                </div>

                <div className="hero-desc">
                    <div className="advantage">
                        <a href="#" className="advantage-1">
                            <FiCheck />
                            Dễ dàng sử dụng
                        </a>

                        <a href="#" className="advantage-2">
                            <FiCheck />
                            Dễ dàng sử dụng
                        </a>

                        <a href="#" className="advantage-3">
                            <FiCheck />
                            Dễ dàng sử dụng
                        </a>
                    </div>

                    <img src={Hero01} alt="" className="image-1" />
                    <img src={Hero02} alt="" className="image-2" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
