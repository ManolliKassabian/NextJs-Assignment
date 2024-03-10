
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";


const TodoList: React.FC<{todos:any[]}> = ({todos}) => {
  const [data, setData] = useState<any[]>(todos);

  // Update state when todos prop changes
  useEffect(() => {
    setData(todos);
  }, [todos]); // Run effect only when todos prop changes
  return (
    <>
    <div className="p-2  text-gray-500 font-bold cursor-pointer">Click on the task to show the task details</div>

    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {data?.map((todo:any, index:any) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
    </>
  );
};

export default TodoList;
