import { ChangeEvent, useState } from "react";
import { Button } from "@pnpm-monorepo-ui/ui";
import { add } from "@pnpm-monorepo-ui/utils";

function App() {
  const [nums, setNums] = useState({
    a: "",
    b: "",
  });

  const handleNumChange =
    (key: keyof typeof nums) => (e: ChangeEvent<HTMLInputElement>) => {
      setNums((prevNums) => ({
        ...prevNums,
        [key]: e.target.value,
      }));
    };
  return (
    <>
      <input type="text" value={nums.a} onChange={handleNumChange("a")} />
      <input type="text" value={nums.b} onChange={handleNumChange("b")} />
      <Button
        onClick={() => {
          alert(add(Number(nums.a), Number(nums.b)));
        }}
      >
        Add
      </Button>
    </>
  );
}

export default App;
