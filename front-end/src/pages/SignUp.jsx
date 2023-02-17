import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/thunks/auth.thunks.js";

const SignUp = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      userName: userName,
      email: email,
      phone: phone,
      password: password,
    };
    try {
      if (!userName || !password || !email || !confirmPassword || !phone) {
        return toast.warning("Vui lòng không để trống dữ liệu!");
      }

      if (password.length < 6) {
        return toast.warning("Mật khẩu nhiều hơn 6 kí tự");
      }

      if (password !== confirmPassword) {
        return toast.warning("Nhập lại mật khẩu!");
      }
      Dispatch(registerUser(newUser));
      Navigate("/login");
    } catch (error) {
      toast.warning(error);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>LOGO</Logo>
          <Form onSubmit={handleRegister}>
            <Input
              type="text"
              placeholder="Tên người dùng"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button style={{ marginBottom: "50px" }}>Đăng kí</Button>
          </Form>
        </Wrapper>
        <ToastContainer />
      </Container>
    </>
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

export default SignUp;
