import axios from "axios";
import { useEffect, useState } from "react";

// SPEC: 各APIデータの型
type PrefecturesData = {
  prefCode: number;
  prefName: string;
};

export default function Prefectures() {
  // ステートの定義
  const [prefectures, setPrefectures] = useState<PrefecturesData[]>([]);

  // 都道府県一覧を取得
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        // TODO: APIキーをenvファイルに格納してセキュリティ対策をする
        headers: { "X-API-KEY": "7OuyZcldkSqrjebk1uY4q5P4upADMoS69nPw9aei" },
      })
      .then((res) => {
        setPrefectures(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(prefectures);
  return (
    <div>
      <h1>都道府県一覧</h1>
      <ul>
        {prefectures.map((prefecture) => (
          <li key={prefecture.prefCode}>{prefecture.prefName}</li>
        ))}
      </ul>
    </div>
  );
}
