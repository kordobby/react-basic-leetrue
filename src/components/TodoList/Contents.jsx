import TodoCards from "./TodoCards";
import { useSelector } from "react-redux";
const Contents = () => {
  const data = useSelector((state) => state?.todo);

  return (
    <>
      <div>
        <h1>Working</h1>
        <TodoCards></TodoCards>
      </div>
      <div>
        <h1>Done</h1>
        {data.map((value, index) => {
          return (
            <TodoCards key={`todoList-card-${index}`} data={value}></TodoCards>
          );
        })}
      </div>
    </>
  );
};
export default Contents;
