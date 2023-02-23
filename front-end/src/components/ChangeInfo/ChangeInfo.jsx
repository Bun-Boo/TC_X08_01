import { FileImageOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
const ChangeInfo = () => {
  const Container = styled.div`
    flex: 3;
    height: 80%;
    background-color: #fff;
    margin-top: 20px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  `;
  const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    padding: 20px;
  `;

  const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  `;
  const InfoLeft = styled.div`
    flex: 2;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const InfoRight = styled.div`
    flex: 1;
    height: 100%;

    background-color: white;
  `;
  const Input = styled.input`
    width: 80%;
    margin: 0 auto;
    padding: 16px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    &:focus {
      outline: none;
    }
  `;
  const Button = styled.button`
    margin: 0 auto;
    padding: 20px;
    width: 200px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    background-color: teal;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
      background-color: #f26526;
    }
  `;
  const Title = styled.p`
    font-size: 16px;
    color: black;
    margin-left: 20px;
    font-weight: bold;
  `;
  const SubTitle = styled.p`
    font-size: 14px;
    margin-left: 50px;
  `;
  const Image = styled.img`
    width: 100%;
    max-width: 250px;
    margin-top: 80px;
    border-radius: 8px;
    object-fit: cover;
  `;
  const Label = styled.label`
    font-size: 16px;
    display: inline-block;
    background-color: teal;
    padding: 10px;
    margin-top: 30px;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    transition: all 0.25s ease-in-out;
    &:hover {
      background-color: #f26526;
    }
  `;
  return (
    <Container>
      <Wrapper>
        <Info>
          <InfoLeft>
            <Title>Thông tin cá nhân</Title>

            <Input type="text" placeholder="UserName...." />
            <Input type="email" placeholder="Email...." />
            <Input type="number" placeholder="Your phone...." />
            <Input type="password" placeholder="Password...." />
            <Button>Lưu</Button>
          </InfoLeft>
          <InfoRight>
            <Image src="https://kenh14cdn.com/2018/10/19/photo-1-15399608173151918722731.png" />
            <Input style={{ display: "none" }} type="file" id="image" />
            <Label htmlFor="image">
              Chọn ảnh mới <FileImageOutlined />
            </Label>
          </InfoRight>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ChangeInfo;
