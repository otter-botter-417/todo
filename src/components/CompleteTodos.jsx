const style = {
  backgroundColor: "#c1c1c1",
  width: "400px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div style={style}>
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
