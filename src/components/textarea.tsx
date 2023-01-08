import React, { KeyboardEvent } from "react";
import { TextareaAutosize } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type TextareaProps = {
  name: string;
  control: Control;
  placeholder?: string;
  onSubmit: () => void;
  onClose: () => void;
};

export default function Textarea({
  placeholder,
  onSubmit,
  onClose,
  control,
  name,
}: TextareaProps) {
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
        <TextareaAutosize
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onBlur={onClose}
          value={value}
          onChange={onChange}
          style={{
            resize: "none",
            width: "100%",
            outline: "none",
            border: "none",
            fontSize: 16,
            fontWeight: 500,
          }}
          autoFocus
        />
      )}
    />
  );
}
