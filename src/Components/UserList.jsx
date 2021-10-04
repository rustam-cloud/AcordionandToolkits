import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount, initalCount] = useData()


  useEffect(() => {
    let timer = setInterval(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.json())
        .then((data) => setUsers(data));
    }, 5000);
    return () => clearInterval(timer)
  }, []);

  return (
    <>
    <h2>Context data is: {count}</h2>
    <button onClick={() => setCount(p => p+1)}>Context data +1</button>
    <button onClick={() => setCount(initalCount)}>Context data set ti initial</button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
