import React from "react";
import "./styles.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineTableCells } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
const Sidebar = () => {
    return (
        <div className="container-sidebar">
            <div className="container-top">
                <div>
                    <AiOutlineHome />
                    <p>Trang chủ</p>
                </div>
                <div>
                    <HiOutlineDocumentText />

                    <p>Mẫu</p>
                </div>
                <div>
                    <HiOutlineTableCells />

                    <p>Bảng</p>
                </div>
            </div>

            <div className="container-bottom">
                <div className="sub-title">
                    <p>Không gian làm việc của tôi</p>
                    <HiPlus className="icon-plus" />
                </div>

                <div className="space">
                    <div>
                        <button>1</button>
                        <p>Không gian 1</p>
                    </div>

                    <div>
                        <button>2</button>
                        <p>Không gian 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
