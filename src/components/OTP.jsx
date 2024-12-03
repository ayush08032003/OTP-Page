import { useRef, useState } from "react";

export function OTP({ number, className, values, setValues }) {
  const itemEle = useRef([]);

  // console.log(values);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);

    if (e.target.value && index + 1 < number) {
      itemEle.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && values[index] === "") {
      if (index > 0) {
        itemEle.current[index - 1].focus();
      }
    }
  };

  const inputs = [];
  for (let i = 0; i < number; i++) {
    inputs.push(
      <SingleInput
        key={i}
        className={className}
        reference={(el) => (itemEle.current[i] = el)}
        value={values[i]}
        onChange={(e) => handleChange(e, i)}
        onKeyDown={(e) => handleKeyDown(e, i)}
      />
    );
  }

  return <div className="flex gap-2">{inputs}</div>;
}

const SingleInput = ({ className, onChange, onKeyDown, reference, value }) => {
  return (
    <input
      maxLength={1}
      type="text"
      ref={reference}
      className={`${className} w-8 h-10`}
      value={value}
      onChange={(e) => {
        // Only allow numeric values and restrict to 1 character
        const newValue = e.target.value;
        if (/^\d$/.test(newValue) || newValue === "") {
          onChange(e);
        }
      }}
      onKeyDown={(e) => {
        // Allow backspace and numeric keys only
        if (!/^\d$/.test(e.key) && e.key !== "Backspace") {
          e.preventDefault();
        }
        onKeyDown(e);
      }}
      pattern="^\d$"
    />
  );
};
