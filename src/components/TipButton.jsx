import React from "react";

export default function TipButton({ percent, selected, onSelectTip }) {
  return (
    <div
      onClick={onSelectTip}
      className={`text-2xl rounded basis-[calc(50%-8px)] text-center py-2 ${
        selected
          ? "text-cyanDarkVery bg-cyanStrong"
          : "text-white bg-cyanDarkVery"
      } cursor-pointer duration-200 ease-in-out select-none md:basis-[calc(33.3%-15px)] hover:text-cyanDarkVery hover:bg-cyanStrong hover:bg-opacity-50 `}
    >
      {percent}%
    </div>
  );
}
