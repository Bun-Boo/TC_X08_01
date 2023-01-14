import React from "react";

import { FaGlobe } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "./HeaderDashboardStyle.css";
import Logo from "../.././images/heart.png";
const HeaderDashboard = () => {
    return (
        <header className="fixed-header">
            <div className="content">
                <nav className="navbar">
                    <div>
                        <img src={Logo} alt="logo" className="logo"></img>
                    </div>

                    <ul>
                        <li>
                            <a href="#">Không gian</a>
                        </li>
                        <li>
                            <a href="#">Gần đây</a>
                        </li>
                        <li>
                            <a href="#">Ưa thích</a>
                        </li>
                        <li>
                            <a href="#">Mẫu</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                    </ul>

                    <div className="actions center">
                        <div className="search center">
                            <CiSearch className="icon-search" />
                            <input type="text" placeholder="Tìm kiếm"></input>
                        </div>

                        <div className="action-lang center">
                            <FaGlobe />
                            <a href="#" className="">
                                VI
                            </a>
                        </div>

                        <div>
                            <a href="#!">
                                <IoMdContact className="icon-contact" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderDashboard;
