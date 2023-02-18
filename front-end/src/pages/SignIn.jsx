import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginUser,
  loginWithGoogle,
  loginWithFacebook,
  logout,
} from "../redux/thunks/auth.thunks";

// import { ColumnHeightOutlined } from "@ant-design/icons";
const SignIn = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    try {
      if (!password || !email) {
        return toast.warning("Vui lòng không để trống dữ liệu!");
      }
      Dispatch(loginUser(newUser));
      Navigate("/listtodo");
    } catch (error) {
      toast.warning(error);
    }
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      Dispatch(loginWithGoogle());
    } catch (error) {
      toast.warning(error);
    }
    console.log("ok login google!");
  };

  const handleLoginWithFacebook = async (e) => {
    e.preventDefault();
    try {
      Dispatch(loginWithFacebook());
    } catch (error) {
      toast.warning(error);
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      Dispatch(logout());
    } catch (error) {
      toast.warning(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Logo>LOGO</Logo>
        <Form onSubmit={handleLoginWithEmail}>
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name=""
            id=""
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Đăng nhập</Button>
        </Form>
        <Span>
          Chưa có tài khoản ? <Link to="/register">Đăng ký</Link>
        </Span>
        <Other>
          <Hr />
          <OtherSpan>Hoặc</OtherSpan>
          <Hr />
        </Other>
        <ButtonOther onClick={handleLoginWithGoogle}>
          Đăng nhập bằng Google
        </ButtonOther>
        <ButtonOther onClick={handleLoginWithFacebook}>
          Đăng nhập bằng Facebook
        </ButtonOther>
        <ButtonOther style={{ marginBottom: "50px" }}>
          Đăng nhập bằng Twitter
        </ButtonOther>
        <ButtonOther onClick={handleLogout}>Logout</ButtonOther>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: #ff6634;
    transition: all 0.25s linear;
  }
`;
const Span = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Other = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
`;
const OtherSpan = styled.span`
  font-size: 12px;
  opacity: 0.6;
`;
const Hr = styled.hr`
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.6;
`;
const ButtonOther = styled.button`
  border-radius: 7px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  width: 185px;
  margin-top: 10px;
  color: #000;
  background-color: transparent;
  border: 1px solid #223671;
  width: 100%;
  &:hover {
    background-color: #ff6634;
    transition: all 0.2s linear;
    color: #fff;
  }
`;

export default SignIn;
