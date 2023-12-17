import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@/stories/Input";
import { Selectbox } from "@/stories/Selectbox";

type PrefecturesData = {
  id: string;
  label: string;
};

type userTypeProps = {
  name: string;
  mail: string;
  birthday: Date | null;
  sex: {
    id: string;
    label: string;
  };
  prefectures: {
    id: string;
    label: string;
  };
};

const sexList = [
  { id: "1", label: "男" },
  { id: "2", label: "女" },
  { id: "3", label: "その他" },
];

export const UserRegistration = () => {
  const [user, setUser] = useState<userTypeProps>({
    name: "",
    mail: "",
    birthday: null,
    sex: {
      id: "",
      label: "",
    },
    prefectures: {
      id: "",
      label: "",
    },
  });
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [prefectures, setPrefectures] = useState<PrefecturesData[]>([]); //
  const [prefectureValue, setPrefecturesValue] = useState("");

  // console.log(text);
  // console.log(birthday);
  // console.log(mail);
  // console.log(sex);
  // console.log(prefectureValue);
  // console.log(user);

  // 都道府県一覧を取得
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        // TODO: APIキーをenvファイルに格納してセキュリティ対策をする
        headers: { "X-API-KEY": "7OuyZcldkSqrjebk1uY4q5P4upADMoS69nPw9aei" },
      })
      .then((res) => {
        console.log(res.data.result, "qqqq");
        const newPrefectures = res.data.result.map(
          (r: { prefCode: number; prefName: string }) => ({
            id: r.prefCode,
            label: r.prefName,
          })
        );
        console.log(newPrefectures, "3333");
        setPrefectures(newPrefectures);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePrefectures = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const prefectureValue = event.target.value;
    // console.log(prefectureValue);
    setPrefecturesValue(prefectureValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string
  ) => {
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string
  ) => {
    const value = e.target.value;
    const id = e.target;
    console.log("id:", id);
    console.log("value:", value);

    // setUser((prev) => ({ ...prev, [key]:{id:id,label:value}  }));
  };
  console.log(user);

  return (
    <>
      <div>
        <h2>氏名</h2>
        <Input
          type="text"
          width="300px"
          padding="10px"
          height="30px"
          value={user.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div>
        <h2>性別</h2>
        {/* Selectbox */}
        <Selectbox
          options={sexList}
          onChange={(e) => handleChange2(e, "sex")}
          value={user.sex.label}
          content="性別"
        />
      </div>
      {/* ここがわからなかった */}
      <div>
        <h2>生年月日</h2>
        <Input
          type="date"
          width="300px"
          padding="10px"
          height="30px"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div>
        <h2>メールアドレス</h2>
        <Input
          type="mail"
          width="300px"
          padding="10px"
          height="30px"
          value={user.mail}
          onChange={(e) => handleChange(e, "mail")}
        />
      </div>
      <div>
        <h2>都道府県 </h2>
      </div>
      <Selectbox
        options={prefectures}
        onChange={changePrefectures}
        value={prefectureValue}
        content="都道府県"
      />
    </>
  );
};
