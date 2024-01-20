import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Navneet",
    age: 22,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-md">Tailwind test</h1>
      <Card username="Navneet Shukla" btnText="Click Me" />
      <Card username="Yatinjal Shukla" btnText="Press Me"/>
    </>
  );
}

export default App;
