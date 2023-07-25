import React from "react";
import Styled from "./styles";

const Title = ({ children, tag = "h1", position }) => {
  return (
    <Styled.Wrapper {...{ position }}>
      {React.createElement(tag, null, children.toUpperCase())}
    </Styled.Wrapper>
  );
};

export default Title;