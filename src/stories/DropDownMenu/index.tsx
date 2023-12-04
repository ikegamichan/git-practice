import { DropDownItem } from "@/stories/DropDownItem";

type DropDownMenuProps = {
  id: string;
  dropDownText: string;
  dorpDownLists: { value: string; detail: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const DropDownMenu = ({
  id,
  dropDownText,
  dorpDownLists,
  onChange,
}: DropDownMenuProps) => {
  return (
    <>
      <label htmlFor={id}>{dropDownText}</label>
      <select id={id} style={{ marginLeft: "20px" }} onChange={onChange}>
        {dorpDownLists.map((dropDownList) => {
          return (
            <DropDownItem
              key={dropDownList.detail}
              value={dropDownList.value}
              detail={dropDownList.detail}
            />
          );
        })}
      </select>
    </>
  );
};
