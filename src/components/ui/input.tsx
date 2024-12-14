import { cn } from "@/lib/utils";
import React from "react";

interface FormInputProps {
  FormInputClassName?: string;
  inputType?: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  FormInputClassName,
  inputType = "text",
  placeholder = "",
}) => {
  return (
    <input
      className={cn(
        "w-full rounded-xl p-4 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-white group-hover:placeholder:text-amber-400 group-hover:border-amber-400 group-hover:focus:border-amber-400 group-hover:text-amber-400 text-red-600 focus:outline-none focus:border-red-800 transition-all ease-in-out duration-500",
        FormInputClassName
      )}
      type={inputType}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
