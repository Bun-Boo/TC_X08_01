import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #000;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px 50px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 10px;
`;
const Logo = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  width: 350px;
  color: #000;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
const Button = styled.button`
  border-radius: 7px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #223671;
  color: #fff;
  width: 185px;
  margin-bottom: 10px;
  &:hover {
    background-color: #ff6634;
    transition: all 0.25s linear;
  }
`;
const SignUp = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>LOGO</Logo>
          <Input type="text" placeholder="Tên người dùng" />
          <Input type="text" placeholder="Email" />
          <Input type="number" placeholder="Số điện thoại" />
          <Input type="password" placeholder="Mật khẩu" />
          <Input type="password" placeholder="Xác nhận mật khẩu" />
          <Button style={{ marginBottom: "50px" }}>Đăng kí</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;
