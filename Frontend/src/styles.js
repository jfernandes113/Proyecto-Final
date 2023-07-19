import { styled } from "styled-components";

const Wrapper = styled.section`
  height: 97vh;
`;

const Page = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ vertical }) => (vertical ? vertical : "space-between")};
  height: 100%;

  a {
    color: black;
  }
`;

export default {
  Wrapper,
  Page,
};