import React from "react";
import { useState } from "react";
import TipButton from "./TipButton";
import CustomButton from "./CustomButton";

export default function Form({ inputs, setInputs, tipBtns, setTipBtns }) {
  const [errorMsg, setErrorMsg] = useState("");
  function handleInputChange(e) {
    if (!e.target.value.match(/^\d*(\.\d*)?$/)) return;
    setErrorMsg("");
    if (e.target.name === "numOfPeople" && e.target.value === "0") {
      setErrorMsg("Can't be zero");
    }
    const nextInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    };
    setInputs(nextInputs);
  }
  function handleSelectTip(e, selectedTip) {
    if (e.currentTarget.id === "customTip") {
      const nextTipBtns = tipBtns.map((button) => {
        if (button.percent === "custom") {
          return {
            ...button,
            selected: !button.selected,
          };
        }
        return {
          ...button,
          selected: false,
        };
      });
      setTipBtns(nextTipBtns);
      setInputs({
        ...inputs,
        tipPercent: "",
      });
    } else {
      const nextTipBtn = tipBtns.map((button) => {
        if (button.percent == selectedTip) {
          return {
            ...button,
            selected: !button.selected,
          };
        }
        return {
          ...button,
          selected: false,
        };
      });
      setTipBtns(nextTipBtn);
      setInputs({
        ...inputs,
        tipPercent: Number(selectedTip),
        customTip: "",
      });
    }
  }

  return (
    <form className="w-full space-y-12">
      <div>
        <label htmlFor="bill" className="text-cyanDarkGrayish text-lg">
          Bill
        </label>
        <div className="relative mt-4">
          <input
            type="tel"
            inputMode="numeric"
            value={inputs.bill}
            onChange={handleInputChange}
            id="bill"
            name="bill"
            placeholder="0"
            className="bg-cyan-l-very-grayish block w-full text-formInput py-1 px-4 rounded text-cyanDarkVery text-right border border-transparent duration-200 ease-in-out cursor-pointer focus:outline-none focus:outline-1 focus:outline-cyanStrong focus:border-none hover:border-cyanStrong"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2">
            <img src="./assets/images/icon-dollar.svg" alt="dollar" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="tipPercent" className="text-cyanDarkGrayish text-lg">
          Select Tip %
        </label>
        <div className="flex flex-wrap gap-4 mt-4">
          {tipBtns.map(({ percent, selected }) =>
            percent === "custom" ? (
              <CustomButton
                key={percent}
                value={inputs.customTip}
                onInputChange={handleInputChange}
                onSelect={handleSelectTip}
                selected={selected}
              />
            ) : (
              <TipButton
                key={percent}
                percent={percent}
                selected={selected}
                onSelectTip={(e) => handleSelectTip(e, percent)}
              />
            )
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <label htmlFor="numOfPeople" className="text-cyanDarkGrayish text-lg">
            Number of People
          </label>
          {errorMsg && <div className="text-orange-700">{errorMsg}</div>}
        </div>
        <div className="mt-4 relative">
          <input
            type="tel"
            id="numOfPeople"
            name="numOfPeople"
            value={inputs.numOfPeople}
            onChange={handleInputChange}
            inputMode="numeric"
            placeholder="0"
            className={`bg-cyan-l-very-grayish block w-full text-formInput py-1 px-4 rounded text-cyanDarkVery text-right border border-transparent duration-200 ease-in-out cursor-pointer focus:outline-none focus:outline-cyanStrong focus:outline-1 focus:border-none hover:border-cyanStrong ${
              errorMsg &&
              "border-orange-600 focus:outline-orange-600 hover:border-orange-700"
            }`}
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2">
            <img src="./assets/images/icon-person.svg" alt="person" />
          </div>
        </div>
      </div>
    </form>
  );
}
