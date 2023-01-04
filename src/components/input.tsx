import React, { KeyboardEvent } from "react";
import { InputBase } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  name: string;
  control: Control;
  placeholder?: string;
  onSubmit: () => void;
  onClose: () => void;
};

export default function Input({
  name,
  control,
  placeholder,
  onSubmit,
  onClose,
}: InputProps) {
  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputBase
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onBlur={onClose}
          value={value}
          onChange={onChange}
          style={{
            overflow: "hidden",
            width: "100%",
            outline: "none",
            border: "none",
            fontSize: 15,
            backgroundColor: "#Ffff",
          }}
          autoFocus
        />
      )}
    />
  );
}
