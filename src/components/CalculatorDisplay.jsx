import React from "react";
import { useMemo } from "react";
export default function CalculatorDisplay({ inputs, isEmpty, onReset }) {
  const { bill, tipPercent, numOfPeople, customTip } = inputs;
  const tipAmount = useMemo(() => {
    if (customTip) {
      return (
        (parseFloat(bill) * parseFloat(parseFloat(customTip) / 100)) /
        (+numOfPeople || 1)
      ).toFixed(2);
    }
    return (
      (parseFloat(bill) * (parseFloat(parseFloat(tipPercent) / 100) || 0)) /
      (+numOfPeople || 1)
    ).toFixed(2);
  }, [inputs]);
  const total = useMemo(() => {
    return (
      parseFloat(bill) / (+numOfPeople || 1) +
      (parseFloat(tipAmount) || 0)
    ).toFixed(2);
  });
  return (
    <div className="w-full bg-cyanDarkVery py-10 rounded-[15px] md:py-12">
      <div className="container mx-auto px-8 flex flex-col justify-between h-full space-y-8 md:space-y-0 md:px-10">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold">
              Tip Amount
              <br />
              <span className="text-cyanGrayish text-[13px] block">
                / person
              </span>
            </div>
            <div className="text-cyanStrong text-3xl md:text-5xl">
              ${isEmpty || numOfPeople == 0 || !bill ? "0.00" : tipAmount}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-white font-bold">
              Total
              <br />
              <span className="text-cyanGrayish text-[13px] block">
                / person
              </span>
            </div>
            <div className="text-cyanStrong text-3xl md:text-5xl">
              ${isEmpty || numOfPeople == 0 || !bill ? "0.00" : total}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={onReset}
            className={`bg-white relative w-full h-12 rounded-lg ${
              isEmpty && "opacity-20"
            }`}
          >
            <div className="absolute inset-0 bg-cyanStrong rounded-lg flex items-center justify-center duration-200 ease-in-out hover:bg-opacity-50">
              <div className="uppercase text-xl text-cyanDarkVery">reset</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
