import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  RedditOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Footer = () => {
  const Logo = styled.h1`
    margin-left: 60px;
    margin-right: 60px;
    font-size: 28px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  `;
  const Footer = styled.div`
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 80px;
  `;
  const ListInfor = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    margin-top: 10px;
  `;
  const Infomation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 20%;
  `;
  const Ftspan = styled.span`
    margin-bottom: 20px;
    font-size: 16px;
  `;
  return (
    <Footer>
      <Logo>LOGO</Logo>
      <ListInfor>
        <Infomation>
          <Ftspan>Một sản phẩm của TC_X08_N01</Ftspan>
          <Ftspan>Thiết kế bởi Hnim Uếih </Ftspan>
        </Infomation>
        <Infomation>
          <Ftspan>Thông tin linh tinh các thứ</Ftspan>
          <Ftspan>Đây là thông tin</Ftspan>
          <Ftspan>Vẫn là thông tin</Ftspan>
        </Infomation>
        <Infomation>
          <Ftspan>Thông tin linh tinh các thứ</Ftspan>
          <Ftspan>Đây là thông tin</Ftspan>
          <Ftspan>Vẫn là thông tin</Ftspan>
        </Infomation>
        <Infomation>
          <Ftspan>Thông tin linh tinh các thứ</Ftspan>
          <Ftspan>Đây là thông tin</Ftspan>
          <Ftspan>Vẫn là thông tin</Ftspan>
        </Infomation>
        <Infomation>
          <Ftspan>Mạng xã hội</Ftspan>
          <Ftspan>
            <FacebookOutlined />
            <TwitterOutlined />
            <RedditOutlined />
          </Ftspan>
          <Ftspan>
            <YoutubeOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
          </Ftspan>
        </Infomation>
      </ListInfor>
    </Footer>
  );
};

export default Footer;
