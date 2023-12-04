import { useState } from "react";
import { Checkbox } from "@/stories/Checkbox";

const list = [
  { id: 1, name: "下野" },
  { id: 2, name: "石原" },
  { id: 3, name: "池上" },
];

export const List = () => {
  const [selectedItem, setSselectedItem] = useState<string[]>([]);
  // console.log(selectedItem);
  const onItemChange = (name: string) => {
    setSselectedItem([...selectedItem, name]);
  };

  return (
    <div>
      CHECKBOX LIST
      <div>aaaaaaa</div>
      <Checkbox
        list={list}
        selectedItem={selectedItem}
        onItemChange={onItemChange}
      />
    </div>
  );
};
