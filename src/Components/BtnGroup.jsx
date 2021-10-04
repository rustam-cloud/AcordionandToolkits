import { useState, useEffect } from "react";

export default function BtnGroup() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  console.log("Render!");

  useEffect(() => {
    console.log("Mount!");
    return () => console.log('Unmount');
  }, []);

  useEffect(() => {
    console.log("Effect by count2!");
    setCount1(count2 / 2)
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount1((p) => p + 1)}>Click 1 ({count1})</button>
      <button onClick={() => setCount2((p) => p + 1)}>Click 2 ({count2})</button>
      <button onClick={() => setCount3((p) => p + 1)}>Click 3 ({count3})</button>
    </div>
  );
}
