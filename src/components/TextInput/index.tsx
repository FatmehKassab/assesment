import { useState } from "react";
import { ICONS } from "../../utils/icons";

interface TextInputProps {
  label: string;
  type?: "text" | "password";
  value: string;
  onChange: (value: string) => void;
  fullBorder?: boolean;
}

const TextInput = ({
  label,
  type = "text",
  value,
  onChange,
  fullBorder = false,
}: TextInputProps) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const inputType = type === "password" && passwordHidden ? "password" : "text";

  const togglePassword = () => setPasswordHidden((prev) => !prev);

  const hasValue = value?.length > 0;

  return (
    <div className="relative w-full">
      {fullBorder && (
        <label
          htmlFor={label.toLowerCase()}
          className={` left-1 text-primary text-sm transition-all duration-200 ease-in-out 
          
        `}
        >
          {label}
        </label>
      )}
      <input
        type={inputType}
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className={`peer w-full py-2 pl-2 pr-10 text-base text-black placeholder-transparent focus:outline-none
    ${
      fullBorder
        ? "border border-primary rounded-md"
        : "border-b border-primary"
    }
  `}
      />
      {!fullBorder && (
        <label
          htmlFor={label.toLowerCase()}
          className={`absolute left-1 text-primary text-sm transition-all duration-200 ease-in-out 
          ${
            hasValue
              ? "-top-2 text-xs text-primary"
              : `
            top-3 text-base text-text
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary
          `
          }
        `}
        >
          {label}
        </label>
      )}

      {type === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-text"
        >
          <img
            src={passwordHidden ? ICONS.show : ICONS.hide}
            className="w-5 h-5"
            alt="Toggle visibility"
          />
        </button>
      )}
    </div>
  );
};

export default TextInput;
