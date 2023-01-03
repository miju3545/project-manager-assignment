import React from "react";
import { InputBase } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  placeholder: string;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onClose: () => void;
  control: Control;
  name: string;
};

export default function Input({
  placeholder,
  onKeyPress,
  onClose,
  control,
  name,
}: InputProps) {
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
          }}
          autoFocus
        />
      )}
    />
  );
}
