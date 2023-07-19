import Common from "../../styles";
import Styled from "./styles";
import { useSalaries } from "../../hooks";

const Salaries = () => {
  const { data: salaries } = useSalaries();
  console.log("data", salaries);

  return (
    <Common.Page>
      <Styled.User>
        <p>user</p>
      </Styled.User>

      <Styled.Generated>
        generated
      </Styled.Generated>
    </Common.Page>
  );
};

export default Salaries;