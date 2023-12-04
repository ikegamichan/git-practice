import { Button } from "@/stories/Button";
import { Input } from "@/stories/Input";
import { TodoList } from "@/stories/ToDoList";

type InputButtonProps = {
  width?: string;
  inputHeight: string;
  buttonHeight: string;
  padding: string;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  todos: string[];
};

export const InputButton = ({
  width,
  inputHeight,
  buttonHeight,
  padding,
  text,
  onChange,
  onClick,
  todos,
}: InputButtonProps) => {
  return (
    <>
      <div>
        <Input
          height={inputHeight} //80px
          width={"300px"}
          padding={padding}
          onChange={onChange}
        />
        <Button
          inputType="button"
          height={buttonHeight} // 100px
          text={text}
          onClick={onClick}
        />
      </div>
      <div>
        <TodoList todos={todos} />
      </div>
    </>
  );
};
