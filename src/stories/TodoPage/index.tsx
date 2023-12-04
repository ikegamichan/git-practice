import { useState } from "react";
import { InputElement } from "@/stories/InputElement";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [enteredText, setEnteredText] = useState<string>("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const addNewTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length, text: enteredText, completed: false },
    ]);
    setEnteredText("");
  };

  const allDelete = () => {
    setTodos([]);
  };

  const deleteClickedTodo = (key: number) => {
    const createTodo = todos.filter((todo) => {
      return key !== todo.id;
    });
    setTodos(createTodo);
  };

  const switchBoolean = (key: number) => {
    // const createTodo = todos.map((todo) => {
    //   return key === todo.id
    //     ? (todo.completed = !todo.completed)
    //     : todo.completed;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === key ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // console.log(todos);
  };

  const deleteCheckedTodo = () => {
    const deleteCheckedTodoItem = todos.filter((todo) => {
      return todo.completed === false;
    });
    setTodos(deleteCheckedTodoItem);
  };

  return (
    <>
      <div>
        <InputElement
          inputType="text"
          inputValue={enteredText}
          onChangeText={getValue}
        />
        <InputElement
          inputType="button"
          inputValue="追加"
          onClick={addNewTodo}
        />
        <InputElement
          inputType="button"
          inputValue="一括削除"
          onClick={allDelete}
        />
        <InputElement
          inputType="button"
          inputValue="選択アイテム一括削除"
          onClick={deleteCheckedTodo}
        />
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <InputElement
              inputType="checkbox"
              isChecked={todo.completed}
              onChangeText={() => switchBoolean(todo.id)}
            />
            <span>{todo.text}</span>
            <InputElement
              inputType="button"
              inputValue="削除"
              onClick={() => deleteClickedTodo(todo.id)}
            />
          </div>
        );
      })}
    </>
  );
};
