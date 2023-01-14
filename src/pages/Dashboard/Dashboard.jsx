import React from "react";
import HeaderDashboard from "../../components/Header/HeaderDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./styles.css";
const Dashboard = () => {
    return (
        <div className="container">
            <HeaderDashboard />
            <div className="dashboard">
                <Sidebar />
                <div className="dashboard-list">
                    <h2>Trang chủ</h2>

                    <div className="dashboard-content">
                        <h3>Xem gần đây</h3>
                        <div className="table-1">Bảng 1</div>
                    </div>

                    <div className="dashboard-content">
                        <div className="title">
                            <h3>Không gian làm việc của tôi</h3>
                            <button className="btn-dashboard">
                                Xem tất cả
                            </button>
                        </div>

                        <div className="dashboard-items">
                            <div className="item">
                                <div className="space">
                                    <button>1</button>
                                    <p>Không gian 1</p>
                                </div>

                                <div>
                                    <button className="btn-dashboard">
                                        Bảng
                                    </button>

                                    <button className="btn-dashboard">
                                        Xem
                                    </button>

                                    <button className="btn-dashboard">
                                        Thành viên (5)
                                    </button>

                                    <button className="btn-dashboard">
                                        Cài đặt
                                    </button>

                                    <button className="btn-dashboard">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>

                            <div className="list-table">
                                <div className="table-1">Bảng 1</div>
                                <div className="table new">Tạo bảng mới</div>
                            </div>
                        </div>

                        <div className="dashboard-items">
                            <div className="item">
                                <div className="space">
                                    <button>2</button>
                                    <p>Không gian 2</p>
                                </div>

                                <div>
                                    <button className="btn-dashboard">
                                        Bảng
                                    </button>

                                    <button className="btn-dashboard">
                                        Xem
                                    </button>

                                    <button className="btn-dashboard">
                                        Thành viên (5)
                                    </button>

                                    <button className="btn-dashboard">
                                        Cài đặt
                                    </button>

                                    <button className="btn-dashboard">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>

                            <div className="list-table">
                                <div className="table-1">Bảng 1</div>
                                <div className="table-2">Bảng 1</div>
                                <div className="table new">Tạo bảng mới</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
