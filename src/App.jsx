import { useState } from "react";
import Form from "./components/Form";
import CalculatorDisplay from "./components/CalculatorDisplay";
const initialInputs = {
  bill: "",
  tipPercent: "",
  numOfPeople: "",
  customTip: "",
};
const initialtipBtns = [
  {
    percent: 5,
    selected: false,
  },
  {
    percent: 10,
    selected: false,
  },
  {
    percent: 15,
    selected: false,
  },
  {
    percent: 25,
    selected: false,
  },
  {
    percent: 50,
    selected: false,
  },
  {
    percent: "custom",
    selected: false,
  },
];
function App() {
  const [inputs, setInputs] = useState(initialInputs);
  const [tipBtns, setTipBtns] = useState(initialtipBtns);
  function handleReset() {
    if (isEmpty()) return;
    setInputs(initialInputs);
    setTipBtns(initialtipBtns);
  }
  function isEmpty() {
    return !inputs.tipPercent && !inputs.bill && !inputs.numOfPeople;
  }
  return (
    <main className="min-h-screen relative bg-cyan-l-grayish grid items-end md:place-items-center md:place-content-center">
      <div className="mx-auto py-10 md:absolute md:top-12 md:left-1/2 md:-translate-x-1/2 md:py-0">
        <img src="./assets/images/logo.svg" alt="logo" />
      </div>
      <div className="container mx-auto p-9 rounded-[15px] bg-white flex flex-col gap-12 md:flex-row">
        <Form
          inputs={inputs}
          setInputs={setInputs}
          tipBtns={tipBtns}
          setTipBtns={setTipBtns}
        />
        <CalculatorDisplay
          inputs={inputs}
          isEmpty={isEmpty()}
          onReset={handleReset}
        />
      </div>
      <footer className="w-full absolute bottom-0 bg-white">
        <p className="flex items-center justify-center">
          <span className="text-3xl mt-2 mr-2">&copy;</span>
          <div className="text-cyanDarkVery">Mohamed Mostafa</div>
        </p>
      </footer>
    </main>
  );
}

export default App;
