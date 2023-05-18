import { ChangeEvent, FocusEvent } from "react";

type inputProps = {
  name: string;
  title: string;
  errorString: string | null;
  onChange: (event: ChangeEvent) => void;
  onBlur: (event: FocusEvent) => void;
  value: string;
  placeholder: string;
};

export default function InputTextField({
  name,
  title,
  placeholder,
  onChange,
  onBlur,
  value,
  errorString,
}: inputProps) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="mb-2 block">
          {title}
        </label>
        <input
          type="text"
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
