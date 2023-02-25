import React from "react";

export default function CustomButton({
  value,
  onInputChange,
  onSelect,
  selected,
}) {
  return (
    <div
      id="custom"
      className={`rounded basis-[calc(50%-8px)] cursor-pointer duration-200 ease-in-out md:basis-[calc(33.3%-15px)]`}
    >
      <input
        type="tel"
        id="customTip"
        name="customTip"
        value={value}
        onChange={onInputChange}
        onClick={onSelect}
        inputMode="numeric"
        placeholder="Custom"
        className="w-full py-1 text-right text-2xl rounded px-4 border cursor-pointer border-transparent text-cyanDarkVery focus:outline-none focus:outline-cyanStrong focus:border-none focus:outline-1 hover:border-cyanStrong placeholder-cyanDarkGrayish placeholder:text-center focus:placeholder:text-white"
      />
    </div>
  );
}
