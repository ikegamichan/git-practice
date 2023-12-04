// "use client";

// import React, { useState } from "react";
// import { Button } from "@/stories/Button";
// import { Button2 } from "@/stories/Buuton2";
// import { Main } from "@/stories/Buuton2/style";
// import { List } from "@/stories/Checkbox/List";
// import { Input } from "@/stories/Input";
// import { InputButton } from "@/stories/InputButton";
// import { Modal } from "@/stories/Modal";
// import { Space } from "@/stories/Space";
// import { Tag } from "@/stories/Tag";
// import { Tag2 } from "@/stories/Tag2";
// import { Textarea } from "@/stories/Textarea";
// import { Title } from "@/stories/Title/style";
// import { TodoItemList } from "@/stories/TodoItemList";
// import { Toggle } from "@/stories/Toggle";

// // const todos = ["面談", "データ整理", "スケジュール調整", "打診"];
// const todos2 = ["あああ", "いいいいいい", "うううううう", "えええええええええ"];
// const todos3 = [""];

// export default function Home() {
//   const [createTodo, setCreateTodo] = useState<string>(""); //Input用
//   const [todos, setTodos] = useState<string[]>([]); //蓄積用

//   // Inputに値が入力されると、都度呼び出されて、Inputに記載されている値をsetCreateTodoに格納する
//   const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCreateTodo(event.target.value);
//   };

//   // 追加ボタンを押された際に、handleChangeInputによってsetCreateTodoに格納された値を、setTodosに新たに追加する
//   const handleAdd = () => {
//     setTodos([...todos, createTodo]);
//   };

//   // const arr = [1, 2, 3];
//   // const newArr = [...arr, 4];
//   // console.log(newArr, "new");
//   // console.log(arr, "arr");

//   return (
//     <Main>
//       {/* -------------------BUTTON---------------------- */}
//       <Title>BUTTON</Title>
//       <Button2
//         //BORDER
//         text={"BORDER"}
//         color={"#E7E7E7"}
//         height={"40px"}
//         bgcolor={"rgb(44, 44, 44)"}
//         fontWeight={"300"}
//         borderRadius={"20px"}
//         cursor={"pointer"}
//         border={"1px solid blue"}
//       />
//       <Space />
//       <Button2
//         //MAIN TEXT ONLY
//         text={"その他の購入オプション"}
//         color={"#E7E7E7"}
//         height={"40px"}
//         bgcolor={"rgb(44, 44, 44)"}
//         fontWeight={"300"}
//         borderRadius={"20px"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //Different Size
//         text={"サイズ違い"}
//         color={"#E7E7E7"}
//         height={"30px"}
//         bgcolor={"rgb(44, 44, 44)"}
//         fontWeight={"300"}
//         borderRadius={"15px"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //Different Color
//         text={"色違い"}
//         color={"rgb(44, 44, 44)"}
//         height={"40px"}
//         bgcolor={"rgb(255, 255, 255)"}
//         fontWeight={"300"}
//         borderRadius={"20px"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //TEXT ONLY
//         text={"テキストのみ"}
//         color={"#E7E7E7"}
//         height={"40px"}
//         bgcolor={"rgba(0, 0, 0, 0)"}
//         fontWeight={"300"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //Disabled
//         text={"非活性"}
//         color={"rgb(0, 0, 0)"}
//         opacity={0.8}
//         height={"40px"}
//         bgcolor={"rgb(44, 44, 44)"}
//         fontWeight={"700"}
//         borderRadius={"20px"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //Main Text And Sub Text
//         text={
//           <span>
//             プレミアムで見る
//             <br />
//             30日間の無料体験を始める
//           </span>
//         }
//         color={"rgb(250, 250, 250)"}
//         fontSize={"12px"}
//         height={"40px"}
//         bgcolor={"rgb(255, 230, 0)"}
//         fontWeight={"700"}
//         borderRadius={"20px"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />
//       <Button2
//         //Icon And Main Text
//         text={<span>▶️ 再生する</span>}
//         color={"#E7E7E7"}
//         height={"40px"}
//         bgcolor={"rgb(44, 44, 44)"}
//         fontWeight={"700"}
//         borderRadius={"20px"}
//         cursor={"pointer"}
//         border={"none"}
//       />
//       <Space />

//       <Button inputType="button" height={"40px"} text={"buttonです"} />

//       <Space />
//       {/* -------------------Tag---------------------- */}
//       <Title>Tag</Title>
//       <Tag
//         text={""}
//         bgColor={"#2C2C2C"}
//         fontColor={""}
//         fontSize={"10px"}
//         border={"none"}
//         borderColor={""}
//         borderRadius={"4px"}
//         width={"48px"}
//       />
//       <Space />
//       <Tag
//         text={"購入済み"}
//         bgColor={"black"}
//         fontColor={"#32CDFF"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#32CDFF"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"購入済み"}
//         bgColor={"#0072F0"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#0072F0"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"プレミアム"}
//         bgColor={"#FFF037"}
//         fontColor={"black"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FFF037"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"プレミアム"}
//         bgColor={"black"}
//         fontColor={"#FFF037"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FFF037"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"新着"}
//         bgColor={"#FF385C"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FF385C"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"独占"}
//         bgColor={"#FF385C"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FF385C"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"独占｜新着"}
//         bgColor={"#FF385C"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FF385C"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"セール"}
//         bgColor={"#FF385C"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={"#FF385C"}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"無料"}
//         bgColor={"black"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={""}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"4K"}
//         bgColor={"black"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={""}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"G"}
//         bgColor={"black"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={""}
//         borderRadius={"4px"}
//       />
//       <Space />
//       <Tag
//         text={"配信前"}
//         bgColor={"black"}
//         fontColor={"white"}
//         fontSize={"10px"}
//         border={"1px solid"}
//         borderColor={""}
//         borderRadius={"4px"}
//       />
//       <Space />

//       <Title>TAG2</Title>

//       <Tag2
//         border={"1px pink solid"}
//         borderRadius={"4px"}
//         fontColor={"white"}
//         font={"14px bold "}
//         text={"yahho!!!"}
//       />

//       {/* -------------------Toggle---------------------- */}
//       <Title>TOGGLE</Title>
//       <Toggle
//         color={"white"}
//         bgcolor={"rgb(136, 136, 136)"}
//         gap={"100px"}
//         width={"300px"}
//         height={"30px"}
//       />
//       <Space />
//       <Title>CHECKBOX</Title>
//       <Space />
//       <Title>TEXTAREA</Title>
//       <Textarea
//         width={"300px"}
//         height={"40px"}
//         border={"2px yellow solid"}
//         borderRadius={"6px"}
//         placeholder={"Textareaです"}
//         fontSize={"14px"}
//         gap={"10px"}
//         padding={"8px"}
//         margin={"10px"}
//       />
//       <Space />
//       <Title>INPUT</Title>

//       <Input
//         width={"400px"}
//         padding={"6px"}
//         height={"30px"}
//         onChange={() => {
//           ("");
//         }}
//       />

//       <Space />
//       <Modal />
//       <Space />
//       <List />
//       {/* <Space />
//       <TodoList todos={todos} />
//       <Space />
//       <TodoList todos={todos2} />
//       <Space />
//       <TodoList todos={todos3} />
//       <Space /> */}
//       <InputButton
//         width={"200"}
//         buttonHeight={""}
//         inputHeight={""}
//         padding={""}
//         text={"追加"}
//         onChange={handleChangeInput}
//         // = onChange={(e) => setTodos([e.target.value])}

//         onClick={handleAdd}
//         // onClick={handleAdd()}
//         // onClick={() => handleAdd()}
//         todos={todos}
//       />
//       <Space />
//       <TodoItemList />
//     </Main>
//   );
// }

// //===================================

// // type foodObj = {
// //   id: number;
// //   name: string;
// // };

// // const foodList: foodObj[] = [
// //   { id: 1, name: "焼肉" },
// //   { id: 2, name: "サラダ" },
// //   { id: 3, name: "カレー" },
// // ];

// // const ParentComponent: React.FC = () => {
// //   return (
// //     <div>
// //       <h1>食べ物リスト</h1>
// //       <ChildComponent foods={foodList} />
// //     </div>
// //   );
// // };

// // export default ParentComponent;

// //===================================

// // type foodObj = {
// //   id: number;
// //   name: string;
// // };

// // const foodList: foodObj[] = [
// //   { id: 1, name: "焼肉" },
// //   { id: 2, name: "サラダ" },
// //   { id: 3, name: "カレー" },
// // ];

// // function ParentComponent() {
// //   const [foods, setFoods] = useState<string[]>([]);

// //   const clickHandler = (foodName: string) => {
// //     if (foods.includes(foodName)) {
// //       setFoods(foods.filter((item) => item !== foodName));
// //     } else {
// //       setFoods([...foods, foodName]);
// //     }
// //   };

// //   return (
// //     <div>
// //       <Checkbox
// //         list={foodList}
// //         selectedItem={foods}
// //         onItemChange={clickHandler}
// //       />
// //       <div>
// //         <h2>CHECKLIST</h2>
// //         <span>{foods}</span>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ParentComponent;
