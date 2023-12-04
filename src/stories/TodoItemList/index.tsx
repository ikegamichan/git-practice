import { useState } from "react";
import { Button } from "@/stories/Button";
import { Input } from "@/stories/Input";
import { Item } from "@/stories/Item";

export const TodoItemList = () => {
  //入力欄に文字が入力された際に値を格納・保持するためのuseState
  const [todoItem, setTodoItem] = useState<string>("");

  //一文字ごとにsetTodoItemsに値を格納していく関数
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  //todoを蓄積するためのuseState
  const [todoItems, setTodoItems] = useState<
    { value: string; checked: boolean }[]
  >([]);

  // ["aaa","bbb"]
  // [{cheked:false,value:"aaa"},{cheked:false,value:"bbb"}]

  //追加ボタンがクリックされたら、既存の配列に新規の配列を追加する関数
  const addTodoItems = () => {
    setTodoItems([...todoItems, { value: todoItem, checked: false }]);
    setTodoItem("");
  };
  // console.log(todoItems);

  // console.log(todoItems);

  //削除ボタンをクリックすると、既存の配列から、クリックされた1つの配列を削除する関数
  const deleteItem = (aaa: number) => {
    // console.log(aaa);
    // console.log(todoItems);
    const deleteTodos = todoItems.filter((todoItem, key) => {
      // console.log(todoItem);
      return key !== aaa;
      // console.log(key, aaa);
    });
    // console.log(deleteTodos);
    setTodoItems(deleteTodos);
  };

  const deleteCheckedItem = () => {
    const createNewDeleteTodo = todoItems.filter((todoItem) => {
      return todoItem.checked === false;
    });

    // const createNewDeleteTodo = todoItems.filter(
    //   (todoItem) => todoItem.checked === false
    // );

    setTodoItems(createNewDeleteTodo);
  };

  const isChecked = (key: number) => {
    const aa = todoItems.map((todo, idx) => {
      return { ...todo, checked: idx === key ? !todo.checked : todo.checked };
    });
    setTodoItems(aa);
  };

  //削除ボタンをクリックすると、既存の配列から、クリックされた1つの配列を削除する関数

  return (
    <>
      <div>
        <Input
          height={""} //80px
          width={"300px"}
          padding={""}
          value={todoItem}
          onChange={getValue}
        />
        <Button
          inputType="button"
          height={""} // 100px
          text={"追加"}
          onClick={addTodoItems}
        />
        <Button
          inputType="button"
          height={""} // 100px
          text={"チェックアイテムの削除"}
          onClick={deleteCheckedItem}
        />
      </div>
      {todoItems.map((todoItem, key) => {
        // todoItem = "aaaa"
        // todoitem = {value:"aaa",cheked:true}
        return (
          <div key={key}>
            <Button
              inputType="checkbox"
              text=""
              checked={todoItem.checked}
              onClick={() => isChecked(key)}
            />
            <Item value={todoItem.value} key={key} />
            <Button
              inputType="button"
              text="削除"
              borderRadius="50%"
              width="50px"
              height="50px"
              border="none"
              onClick={() => {
                // window.aaa = "takuto";
                deleteItem(key);
              }}
            />
          </div>
        );
      })}
    </>
  );
};
