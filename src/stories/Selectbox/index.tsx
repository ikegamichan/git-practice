import { useState } from "react";

type SelectboxProps = {
  options: string[];
};

export const Selectbox = ({ options }: SelectboxProps) => {
  const [prefectures, setPrefectures] = useState<string[]>([]);

  const changePrefectures = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const prefectureValue = event.target.value;
    setPrefectures([prefectureValue]);
  };
  return (
    <select value={prefectures} onChange={changePrefectures}>
      <option value="" disabled>
        --都道府県を選択してください--
      </option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
