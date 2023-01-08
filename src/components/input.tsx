import React, { KeyboardEvent } from "react";
import { InputBase as MuiInput } from "@mui/material";

import { Control, Controller } from "react-hook-form";
import styled from "@emotion/styled";

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
        <CustomInput
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onBlur={onClose}
          value={value}
          onChange={onChange}
          autoFocus
        />
      )}
    />
  );
}

const CustomInput = styled(MuiInput)`
  overflow: hidden;
  width: 100%;
  font-size: 15px;
  background-color: #fff;
  font-weight: 500;
  &:focus {
    outline-color: blue;
  }
`;
