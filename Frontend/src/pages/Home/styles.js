import { styled } from "styled-components";

const User = styled.section`
  position: absolute;
  top: 20px;
  right: 20px;

  p {
    margin: 0;
  }
`;

const Generated = styled.section`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin-top: 0;
  height: 40px;

  a {
    text-decoration: none;
  }
`;

export default {
  User,
  Generated,
};