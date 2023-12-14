"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Main } from "@/stories/Buuton2/style";
import { Quiz } from "@/stories/Quiz";
import { Selectbox } from "@/stories/Selectbox";
import { Space } from "@/stories/Space";

type PrefecturesData = {
  // prefCode: number;
  prefName: string;
};

export default function Home() {
  // const options = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];

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

  const allPrefectures = prefectures.map((prefecture) => prefecture.prefName);
  console.log(allPrefectures);

  return (
    <Main>
      {/* <TodoItemList /> */}
      <Space />
      {/* <TodoPage /> */}

      <Space />
      {/* <HouseholdAccounts /> */}
      <Quiz />

      <Space />
      <Space />
      <Selectbox options={allPrefectures} />
    </Main>
  );
}
