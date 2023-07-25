import './styles.css'; 

const List = ({items}) => {

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            { item.recommendations && <p>{item.recommendations}</p> }
            <div className='info-container'>
              {
                item.values.map((v, index) => (
                  <div key={index} className='info' style={{background: v.background}}>
                    <span>{v.key}: {v.value}</span>
                  </div>
                ))
              }
            </div>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default List;