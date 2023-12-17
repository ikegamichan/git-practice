type SelectboxProps = {
  options: { id: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  content: string;
};

export const Selectbox = ({
  options,
  value,
  onChange,
  content,
}: SelectboxProps) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>
        --{content}を選択してください--
      </option>
      {options.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
