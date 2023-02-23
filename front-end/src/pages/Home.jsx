import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sliderImage from "./../images/hero.jpg";
import imagePersion from "./../images/Image 2.png";
import {
  CaretUpOutlined,
  CheckCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <Slider>
        <Img src={sliderImage} />
        <Trick>
          <CheckCircleOutlined />
          Tính năng ưu việt
        </Trick>
        <Trick1>
          <CheckCircleOutlined />
          Dễ dàng sử dụng
        </Trick1>
        <Trick2>
          <CheckCircleOutlined />
          Quản lý hiệu quả
        </Trick2>
        <SliderRight>
          <Title>Bạn đang gặp khó khăn trong quản lý thời gian?</Title>
          <Hr />
          <Paragraph>
            Chúng tôi cung cấp ứng dụng lập lịch, quản lý thời gian, công việc
            cho cá nhân, tổ chức và hơn thế nữa.
          </Paragraph>
          <Box>
            <Link to="/login">
              <Button>Đăng nhập</Button>
            </Link>
            <Link to="/login">
              <Icon>
                <SendOutlined />
              </Icon>
            </Link>
          </Box>
        </SliderRight>
      </Slider>
      <About>
        <Details>Về chúng tôi</Details>

        <ListUs>
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
        </ListUs>
      </About>

      <About>
        <Details>Tính năng chính</Details>
        <ListUs>
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
          <ImgUs src={imagePersion} />
        </ListUs>
      </About>

      <Content>
        <ContentTitle>Bắt đầu ngay hôm nay!</ContentTitle>
        <ContentSubtitle>
          Lên kế hoạch và quản lý tất cả mọi thứ ngay từ bây giờ với nhóm của
          bạn hoặc cho riêng bạn.
        </ContentSubtitle>
        <Link to="/login">
          <ContentButton>Bắt đầu</ContentButton>
        </Link>
      </Content>

      <Footer />
      <Circle>
        <CaretUpOutlined />
      </Circle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  transform: scaleX(-1);
  height: 100%;
  object-fit: cover;
`;
const Trick = styled.div`
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 60%;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 255px;
  background-color: #fff;
`;
const Trick1 = styled.div`
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 255px;
  background-color: #fff;
`;
const Trick2 = styled.div`
  font-family: "Poppins", sans-serif;
  position: absolute;
  bottom: 20%;
  left: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 255px;
  background-color: #fff;
`;

const SliderRight = styled.div`
  width: 550px;
  position: absolute;
  right: 15%;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Title = styled.h1`
  width: 60%;
  text-align-last: right;
  text-transform: uppercase;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
const Hr = styled.hr`
  width: 30%;
  margin: 20px 20px;
`;
const Paragraph = styled.p`
  width: 85%;
  text-align-last: right;
  font-size: 20px;
  color: #fff;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: 1px solid #ff6634;
  background-color: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff6634;
    transition: all 0.25s linear;
  }
`;
const Icon = styled.div`
  padding: 10px;
  margin-left: 7px;
  border-radius: 5px;
  background-color: #ff6634;
  color: #fff;
  cursor: pointer;
`;
const About = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 50px;
`;
const Details = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
`;
const ListUs = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  padding: 20px;
  border-radius: 7px;
`;
const ImgUs = styled.img``;

const Content = styled.div`
  background-color: #707070;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;
const ContentTitle = styled.h2`
  padding: 10px;
  color: #fff;
  font-weight: 300;
`;
const ContentSubtitle = styled.p`
  font-size: 20px;
  color: #fff;
`;
const ContentButton = styled.button`
  padding: 10px 30px;
  margin: 20px 0;
  border-radius: 7px;
  border: none;
  &:hover {
    background-color: #ff6634;
    cursor: pointer;
    transition: all 0.25s linear;
  }
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ff6634;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 30px;
  z-index: 999;
  position: fixed;
`;

export default Home;
