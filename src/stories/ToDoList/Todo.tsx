type TodoProps = {
  text: string | number;
};

export const Todo = ({ text }: TodoProps) => {
  return <span style={{ marginLeft: "20px" }}>{text}</span>;
};
