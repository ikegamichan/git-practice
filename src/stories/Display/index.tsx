import { Space } from "@/stories/Space";
type DisplayProps = {
  income: number;
  spend: number;
  balance: number;
};

export const Display = ({ income, spend, balance }: DisplayProps) => {
  // const income = 110000;
  // const spend = 16950;
  // const balance = income - spend;

  return (
    <div>
      <span>収入 : {income.toLocaleString()}円</span>
      <span style={{ marginLeft: "40px" }}>
        支出 : {spend.toLocaleString()}円
      </span>
      <span style={{ marginLeft: "40px" }}>
        残高 : {balance.toLocaleString()}円
      </span>
      <Space />
    </div>
  );
};
