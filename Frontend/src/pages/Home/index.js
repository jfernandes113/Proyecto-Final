import Common from "../../styles";
import Styled from "./styles";

const Home = () => {

  return (
    <Common.Page vertical="center">
      <Styled.Generated>
        <a href="/Jobs">Jobs</a>
      </Styled.Generated>

      <Styled.Generated>
        <a href="/Locations">Locations</a>
      </Styled.Generated>
    </Common.Page>
  );
};

export default Home;