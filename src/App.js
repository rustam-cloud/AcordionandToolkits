import "./App.css";
import DropDown from "./Components/Dropdown/Dropdown";
import PopOver from "./Components/Popover/PopOver";
import PopOverHov from "./Components/PopOverHov/PopOverHov";
import Acordion from "./Components/Acordion/Acordion";

function App() {
  return (
    <>
      <Acordion />

      <div className="container">
        <DropDown btnText="Start" />
        <PopOver btnText="Start" btnSide="left" />
        <PopOver btnText="Start" btnSide="bottom" />
        <PopOver btnText="Start" btnSide="top" />
        <PopOver btnText="Start" btnSide="right" />
      </div>
      <div className="container">
        <DropDown btnText="Start" />
        <PopOverHov btnText="Start" btnSide="left" />
        <PopOverHov btnText="Start" btnSide="bottom" />
        <PopOverHov btnText="Start" btnSide="top" />
        <PopOverHov btnText="Start" btnSide="right" />
      </div>
    </>
  );
}

export default App;
