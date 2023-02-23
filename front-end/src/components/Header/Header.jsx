import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
  const Header = styled.div`
    height: 70px;
    width: 100%;
    background-color: rgba(174, 183, 185, 0.34);
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    position: fixed;
  `;

  const Ul = styled.ul`
    list-style-type: none;
    overflow: hidden;
    padding: 0;
    margin-right: 28px;
  `;
  const Li = styled.li`
    float: left;
    cursor: pointer;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  `;

  const HeaderLeft = styled.div``;
  const HeaderRight = styled.div`
    flex: 5;
  `;
  const Logo = styled.h1`
    margin-left: 60px;
    margin-right: 60px;
    font-size: 28px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  `;
  return (
    <Header>
      <HeaderLeft>
        <Link to="/" className="link">
          <Logo>LOGO</Logo>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <Ul>
          <Li>
            <Link className="link">Về chúng tôi</Link>
          </Li>
          <Li>
            <Link className="link" to="listtodo">
              Tính năng
            </Link>
          </Li>
          <Li>
            <Link className="link">Tài liệu</Link>
          </Li>
          <Li style={{ float: "right" }}>
            <Link className="link text">VI</Link>
          </Li>
          <Li style={{ float: "right" }}>
            <Link className="link text">|</Link>
          </Li>
          <Li style={{ float: "right" }}>
            <Link className="link text">Liên hệ</Link>
          </Li>

          <Li style={{ float: "right" }}>
            <Link className="link text n">
              <LogoutOutlined />
            </Link>
          </Li>

          <Li style={{ float: "right" }}>
            <Link className="link text margin" to="/setting">
              Xin chào: Tên user
              <UserOutlined className="link text ml" />
            </Link>
          </Li>
        </Ul>
      </HeaderRight>
    </Header>
  );
};

export default Header;
