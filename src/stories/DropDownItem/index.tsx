type DropDownItemProps = {
  value: string;
  detail: string;
};

export const DropDownItem = ({ value, detail }: DropDownItemProps) => {
  return <option value={value}>{detail}</option>;
};
