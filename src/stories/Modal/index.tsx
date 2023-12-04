import { useState } from "react";
import { Button } from "@/stories/Button";

export const Modal = () => {
  const [showFlag, setShowFlag] = useState(true);

  const onClick = () => {
    setShowFlag(!showFlag);
    // if (showFlag) {
    //   setShowFlag(false);
    // } else {
    //   setShowFlag(true);
    // }
  };

  console.log("-----------", showFlag);

  return (
    <div>
      {showFlag && <div>aaaa</div>}
      {/* {showFlag ? "aaaaaaaa" : ""} */}
      {/* {showFlag && "aaaaaaaa"} */}

      <Button height={"30px"} text={"ボタン"} onClick={onClick} />
    </div>
  );
};
