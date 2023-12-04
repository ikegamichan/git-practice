import { InputElement } from "@/stories/InputElement";

type TodoElementProps = {
  todoItems: string[];
  onChange: () => void;
  onClick: () => void;
};

export const TodoElement = ({
  todoItems,
  onChange,
  onClick,
}: TodoElementProps) => {
  return (
    <div>
      {todoItems.map((todoItem, key) => {
        return (
          <div key={key}>
            <InputElement
              inputType="checkbox"
              key={key}
              isChecked={false}
              onClick={onChange}
            />
            <span>{todoItem}</span>
            <InputElement
              inputType="button"
              inputValue="削除"
              key={key}
              onClick={() => onClick}
            />
          </div>
        );
      })}
    </div>
  );
};
