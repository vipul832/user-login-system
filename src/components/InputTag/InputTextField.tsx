import { ChangeEvent, FocusEvent } from "react";

type inputProps = {
  name: string;
  title: string;
  errorString: string | null;
  onChange: (event: ChangeEvent) => void;
  onBlur: (event: FocusEvent) => void;
  value: string;
  placeholder: string;
  type: string;
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
}: inputProps) {
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
    </>
  );
}
