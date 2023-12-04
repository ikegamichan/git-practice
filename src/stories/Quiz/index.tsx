import { useState } from "react";
import { DivButton } from "@/stories/DivButton/style";

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const questionNum = currentQuestionIndex + 1;
  const questionList = [
    {
      questionText: "ライオットで1番背が高いのは？",
      answerOptions: [
        { choices: "下野", key: 1, isCorrect: false },
        { choices: "石原", key: 2, isCorrect: true },
        { choices: "村山", key: 3, isCorrect: false },
      ],
    },
    {
      questionText: "ああああああああああああ",
      answerOptions: [
        { choices: "ああ", key: 1, isCorrect: false },
        { choices: "いい", key: 2, isCorrect: true },
        { choices: "うう", key: 3, isCorrect: false },
      ],
    },
    {
      questionText: "いいいいいいいいいいいいい",
      answerOptions: [
        { choices: "ええ", key: 1, isCorrect: false },
        { choices: "おお", key: 2, isCorrect: true },
        { choices: "かか", key: 3, isCorrect: false },
      ],
    },
    {
      questionText: "ううううううううううううう",
      answerOptions: [
        { choices: "きき", key: 1, isCorrect: false },
        { choices: "くく", key: 2, isCorrect: true },
        { choices: "けけ", key: 3, isCorrect: false },
      ],
    },
  ];

  //描画したい回答番号をカウントするための変数
  const currentQuestionList = questionList[currentQuestionIndex].answerOptions;

  //現在の問題数と正答数を描画するための変数
  const currentSituation = `${currentQuestionIndex}問中${correctCount}問正解です！`;
  const correctAnswerRate =
    currentQuestionIndex !== 0
      ? `正答率は${Math.round(
          (correctCount / currentQuestionIndex) * 100
        )}%です`
      : "回答すると正答率が表示されます！";

  //onClickで次の問題を出すための処理。最終問題が終了すると1番目に戻る。
  const alertAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      console.log("問題数：", currentQuestionIndex, "正解数：", correctCount);
      window.alert("お見事、正解です！");
    } else {
      console.log("問題数：", currentQuestionIndex, "正解数：", correctCount);
      window.alert("残念、不正解です！");
    }

    if (currentQuestionIndex + 1 !== questionList.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
      setCorrectCount(0);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>3択クイズ</h1>
      <h2 style={{ textAlign: "center" }}>第{questionNum}問</h2>
      <h3 style={{ textAlign: "center", color: "red" }}>
        {questionList[currentQuestionIndex].questionText}
      </h3>
      <div style={{ textAlign: "center" }}>{currentSituation}</div>
      <div style={{ textAlign: "center" }}>{correctAnswerRate}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {currentQuestionList.map((quiz) => {
          return (
            <DivButton
              text={quiz.choices}
              key={quiz.key}
              onClick={() => alertAnswer(quiz.isCorrect)}
            />
          );
        })}
      </div>
    </div>
  );
};
