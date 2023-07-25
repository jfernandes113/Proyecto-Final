import { styled } from "styled-components";

const Wrapper = styled.section`
  h1 {
    font-size: 36px;
    margin: 100px 0 0;
  }

  h2,
  h3 {
    font-size: 28px;
    margin: 0 0 30px;
  }

  text-align: ${({ position }) => position};
`;

export default {
  Wrapper,
};