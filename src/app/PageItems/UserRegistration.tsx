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
  const [prefectures, setPrefectures] = useState<PrefecturesData[]>([]); //

  // 都道府県一覧を取得
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        // TODO: APIキーをenvファイルに格納してセキュリティ対策をする
        headers: { "X-API-KEY": "7OuyZcldkSqrjebk1uY4q5P4upADMoS69nPw9aei" },
      })
      .then((res) => {
        const newPrefectures = res.data.result.map(
          (r: { prefCode: string; prefName: string }) => ({
            id: r.prefCode.toString(),
            label: r.prefName,
          })
        );

        setPrefectures(newPrefectures);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  /* ここがわからなかった1(多重構造のオブジェクトのid,labelの値を抽出する方法) */

  const handleChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getBirthday = e.target.value;
    setUser((prev) => ({ ...prev, birthday: new Date(getBirthday) }));
  };

  const handleChangeSex = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value.toString();
    const selectedSex = sexList.find((item) => item.id === selectedId);

    if (selectedSex) {
      setUser((prev) => ({
        ...prev,
        sex: {
          id: selectedSex.id,
          label: selectedSex.label,
        },
      }));
    }
  };

  const handleChangePrefectures = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPrefecture = prefectures.find(
      (item) => item.id === e.target.value
    );

    if (selectedPrefecture) {
      setUser((prev) => ({
        ...prev,
        prefectures: {
          id: selectedPrefecture.id,
          label: selectedPrefecture.label,
        },
      }));
    }
  };

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
        <Selectbox
          options={sexList}
          onChange={(e) => handleChangeSex(e)}
          value={user.sex.id}
          content="性別"
        />
      </div>
      <div>
        <h2>生年月日</h2>
        <Input
          type="date"
          width="300px"
          padding="10px"
          height="30px"
          value={user.birthday?.toISOString().slice(0, 10) ?? ""}
          onChange={(e) => handleChangeBirthday(e)}
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
        onChange={(e) => handleChangePrefectures(e)}
        value={user.prefectures.id}
        content="都道府県"
      />
    </>
  );
};
