import { ChangeEvent, FocusEvent } from "react";
import zxcvbn from "zxcvbn";

type inputProps = {
  name: string;
  title: string;
  errorString: string | null;
  onChange: (event: ChangeEvent) => void;
  onBlur: (event: FocusEvent) => void;
  value: string;
  placeholder: string;
  type: string;
  isMeter?: boolean;
};

const strengthMeter = {
  0: {
    color: "bg-[#ddd]",
    text: "weak",
  },
  1: {
    color: "bg-[#ef4836]",
    text: "weak",
  },
  2: {
    color: "bg-[#f6b44d]",
    text: "ok",
  },
  3: {
    color: "bg-[#2b90ef]",
    text: "good",
  },
  4: {
    color: "bg-[#25c281]",
    text: "strong",
  },
};

export default function InputTextField({
  name,
  title,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  errorString,
  isMeter = false,
}: inputProps) {
  const score = zxcvbn(value).score;
  const barWidth = (score * 100) / 4;
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="mb-2 block font-[500]">
          {title}
          <sup className="text-red-500 text-md"> *</sup>
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
        />
      </div>
      {errorString && <div className="text-red-500 mb-2">{errorString}</div>}
      {name === "password" && value && isMeter ? (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-6">
          <div
            className={`${strengthMeter[score].color} h-2.5 rounded-full`}
            style={{ width: barWidth + "%" }}
          ></div>
          <p className="text-center">
            {strengthMeter[score].text} {score}
          </p>
        </div>
      ) : null}
    </>
  );
}
