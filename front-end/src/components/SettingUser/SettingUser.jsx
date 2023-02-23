import React from "react";
import ChangeInfo from "../ChangeInfo/ChangeInfo";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const SettingUser = () => {
  const Container = styled.div`
    width: 60%;
    height: 80vh;
    margin: 100px auto;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    position: relative;
  `;
  const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 50px;
    padding: 20px;
    background: #9898e3;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  `;
  const BigTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-top: 30px;
    margin-left: 50px;
  `;
  const SmallTitle = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: #000;
    margin-left: 50px;
  `;

  const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  `;
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <BigTitle>QUẢN LÝ TÀI KHOẢN</BigTitle>
          <SmallTitle>Cập nhật thông tin tài khoản của bạn</SmallTitle>
          <Main>
            <Slider />
            <ChangeInfo />
          </Main>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default SettingUser;
