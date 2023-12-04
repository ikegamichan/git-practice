import { Todo } from "@/stories/ToDoList/Todo";

type TodoListProps = {
  todos: { incomeOrSpend: string; content: string; price: number }[];
};

//  0       1       2
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.content}>
          <Todo text={todo.incomeOrSpend} />
          <Todo text={todo.content} />
          <Todo text={todo.price} />
        </div>
      ))}
    </div>
  );
};

{
  /* <div>
  {todos.map((todo) => {
    <div key={todo.bbb}>
      <Todo text={todo.aaa} />
      <Todo text={todo.bbb} />
      <Todo text={todo.price} />
    </div>;
  })}
</div>; */
}
