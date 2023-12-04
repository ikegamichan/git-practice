import React from "react";

type foodObj = {
  id: number;
  name: string;
};

type CheckboxProps = {
  list: foodObj[];
  selectedItem: string[];
  onItemChange: (foodName: string) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  list,
  selectedItem,
  onItemChange,
}) => {
  return (
    <div>
      <h1>Checkbox</h1>
      {list.map((food) => (
        <div key={food.id}>
          <input
            type="checkbox"
            value={food.name}
            checked={selectedItem.includes(food.name)}
            onChange={() => onItemChange(food.name)}
          />
          <span>{food.name}</span>
        </div>
      ))}
    </div>
  );
};

//==========================================

// import React, { useState } from "react";

// type FoodItem = {
//   id: number;
//   name: string;
// };

// type ChildComponentProps = {
//   foods: FoodItem[];
// };

// const ChildComponent: React.FC<ChildComponentProps> = ({ foods }) => {
//   const [foodList, setFoodList] = useState([]);
//   return (
//     <div>
//       {foods.map((food) => (
//         <div key={food.id}>
//           <input type="checkbox" value={food.name} />
//           <span>{food.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ChildComponent;

//==========================================

// type foodObj = {
//   id: number;
//   name: string;
// };

// const foodList: foodObj[] = [
//   { id: 1, name: "焼肉" },
//   { id: 2, name: "サラダ" },
//   { id: 3, name: "カレー" },
// ];

// export const Checkbox = () => {
//   const [foods, setFoods] = useState<string[]>([]);

//   const clickHandler = (foodName: string) => {
//     if (foods.includes(foodName)) {
//       setFoods(foods.filter((item: string) => item !== foodName));
//     } else {
//       setFoods([...foods, foodName]);
//     }
//   };

//   return (
//     <div>
//       <h1>Checkbox</h1>
//       {foodList.map((food) => {
//         return (
//           <div key={food.id}>
//             <input
//               type="checkbox"
//               value={food.name}
//               onChange={() => clickHandler(food.name)}
//             />
//             <span>{food.name}</span>
//           </div>
//         );
//       })}
//       <div>
//         <h2>CHECKLIST</h2>
//         <span>{foods}</span>
//       </div>
//     </div>
//   );
// };

//==========================================

// import React, { useState } from "react";

// type FoodObj = {
//   id: number;
//   name: string;
// };

// const foodList: FoodObj[] = [
//   { id: 1, name: "焼肉" },
//   { id: 2, name: "サラダ" },
//   { id: 3, name: "カレー" },
// ];

// export const MenuCheckbox = () => {
//   const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

//   const handleCheckboxChange = (foodName: string) => {
//     if (selectedFoods.includes(foodName)) {
//       setSelectedFoods(selectedFoods.filter((item) => item !== foodName));
//     } else {
//       setSelectedFoods([...selectedFoods, foodName]);
//     }
//   };

//   return (
//     <div>
//       <h1>Menu List</h1>
//       {foodList.map((food) => {
//         return (
//           <div key={food.id}>
//             <span>{food.name}</span>
//             <input
//               type="checkbox"
//               value={food.name}
//               onChange={() => handleCheckboxChange(food.name)}
//             />
//           </div>
//         );
//       })}
//       <div>
//         <h2>Selected Items : </h2>

//         {selectedFoods.map((food, index) => (
//           <span key={index}> {food}</span>
//         ))}
//       </div>
//     </div>
//   );
// };
