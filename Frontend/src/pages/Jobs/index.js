import Common from "../../styles";
import List from "../../components/List";
import { useSalaries } from "../../hooks";

const Jobs = () => {

  const { data: list } = useSalaries();

  const dataList = list ? list.map(item => (
    {
      name: item.title,
      values: [
        {
          background: 'red',
          value: item.average_salary,
          key: 'Salario promedio'
        }
      ]
    }
  )) : [];

  return (
    <Common.Page vertical="start">
      <a href="/" class="back-link">Atras</a><br></br>

      <h2>Jobs</h2>

      <List items={dataList}></List>
    </Common.Page>
  );
};

export default Jobs;