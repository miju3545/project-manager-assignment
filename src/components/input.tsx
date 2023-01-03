import React from "react";
import { InputBase } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type InputProps = {
  name: string;
  control: Control;
  placeholder: string;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onClose: () => void;
};

export default function Input({
  name,
  control,
  placeholder,
  onKeyPress,
  onClose,
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
