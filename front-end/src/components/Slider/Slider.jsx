import React from "react";
import styled from "styled-components";

const Slider = () => {
  const Container = styled.div`
    flex: 1;
    background-color: teal;
    margin-top: 20px;
    height: 80%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
  `;
  const Ul = styled.ul`
    list-style-type: none;
    /* overflow: hidden; */
    padding: 0;
  `;
  const Li = styled.li`
    cursor: pointer;
    /* display: inline-block; */
    color: white;
    text-align: center;
    padding: 14px 14px;
    margin-right: 50px;
    margin-left: 10px;
    text-decoration: none;
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
    width: 200px;
    display: flex;
    align-items: flex-start;
    &:hover {
      background: #3a6186; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #89253e,
        #3a6186
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #89253e,
        #3a6186
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      border-radius: 12px;
      transform: scale(1.2);
    }
  `;
  return (
    <Container>
      <Wrapper>
        <Ul>
          <Li>Profile</Li>
          <Li>Upgrade</Li>
          <Li>Premium</Li>
          <Li>Profile</Li>
          <Li>Profile</Li>
        </Ul>
      </Wrapper>
    </Container>
  );
};

export default Slider;
