type ItemProps = {
  value: string;
};

export const Item = ({ value }: ItemProps) => {
  return <span>{value}</span>;
};
