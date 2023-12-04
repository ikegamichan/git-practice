import { useState } from "react";
import { Display } from "@/stories/Display";
import { DropDownMenu } from "@/stories/DropDownMenu";
import { InputElement } from "@/stories/InputElement";
import { TodoList } from "@/stories/ToDoList";

export const HouseholdAccounts = () => {
  type List = {
    incomeOrSpend: string;
    content: string;
    price: number;
  };

  const [income, setIncome] = useState(0);
  const [spend, setSpend] = useState(0);
  const [balance, setBalance] = useState(0);
  const [incomeOrSpend, setIncomeOrSpend] = useState("income");
  const [errMsg, setErrMag] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [contentAndPriceList, setContentAndPriceList] = useState<List[]>([]);
  const id = "accounts";
  const dorpDownLists = [
    { value: "income", detail: "収入" },
    { value: "spend", detail: "支出" },
  ];

  const addNewContentAndPrice = () => {
    if (incomeOrSpend === "income") {
      setIncome((prev) => {
        console.log("たくと");
        setBalance(+price + prev - spend);
        return +price + prev;
      });
      setContentAndPriceList((prev) => [
        ...prev,
        {
          incomeOrSpend: "収入",
          content: content,
          price: Number(price),
        },
      ]);
    }
    if (incomeOrSpend === "spend") {
      setSpend((prev) => {
        console.log("たくと");
        setBalance(income - (+price + prev));
        return +price + prev;
      });

      setContentAndPriceList((prev) => [
        ...prev,
        {
          incomeOrSpend: "支出",
          content: content,
          price: Number(price),
        },
      ]);
    }
    setContent("");
    setPrice("");
    // incomeOrSpend === "income"
    //   ? (setIncome((prev) => +price + prev),
    //     setBalance(income - spend),
    //     setContentAndPriceList((prev) => [
    //       ...prev,
    //       {
    //         incomeOrSpend: "収入",
    //         content: content,
    //         price: Number(price),
    //       },
    //     ]))
    //   : incomeOrSpend === "spend"
    //   ? (setSpend((prev) => +price + prev),
    //     setBalance(income - spend),
    //     setContentAndPriceList((prev) => [
    //       ...prev,
    //       {
    //         incomeOrSpend: "支出",
    //         content: content,
    //         price: Number(price),
    //       },
    //     ]))
    //   : "";
    // console.log(contentAndPriceList);
  };

  const changeDropDownMenu = () => {
    return incomeOrSpend === "income"
      ? setIncomeOrSpend("spend")
      : setIncomeOrSpend("income");
  };

  const enterdContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    return setContent(content);
  };

  const enterdPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (!Number(e.target.value)) {
      setErrMag("数値で入力してください");
      return;
    } else {
      setErrMag("");
      const priceValue = e.target.value;
      // contentが空でない場合にparseIntを実行
      const price = priceValue !== "" ? Number(priceValue) : "";
      return setPrice(price.toString());
    }
  };

  // useEffect(() => {
  //   console.log("たくと");
  //   setBalance(income - spend);
  // }, [income, spend]);

  console.log({ price });
  return (
    <>
      <Display income={income} spend={spend} balance={balance} />
      <DropDownMenu
        id={id}
        dropDownText="選択してね！"
        dorpDownLists={dorpDownLists}
        onChange={changeDropDownMenu}
      />
      <InputElement
        inputType="text"
        onChangeText={enterdContent}
        inputValue={content}
      />
      <InputElement
        inputType="text"
        onChangeText={enterdPrice}
        inputValue={price}
      />
      <InputElement
        inputType="button"
        inputValue="追加する！"
        onClick={addNewContentAndPrice}
      />
      <div>{errMsg}</div>
      <TodoList todos={contentAndPriceList} />
    </>
  );
};
