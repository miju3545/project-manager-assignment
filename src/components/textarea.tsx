import React, { ForwardedRef } from "react";
import { TextareaAutosize } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type TextareaProps = {
  placeholder: string;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onClose: () => void;
  control: Control;
  name: string;
};

export default function Textarea({
  placeholder,
  onKeyPress,
  onClose,
  control,
  name,
}: TextareaProps) {
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

// export default forwardRef<HTMLInputElement, TextareaProps>(Textarea);

// const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({ onKeyPress, ...rest }, ref) => {
//   return (
//     <TextareaAutosize
//       {...rest}
//       style={{ resize: 'none', overflow: 'hidden', width: '100%', outline: 'none', border: 'none', fontSize: 15 }}
//       onKeyPress={onKeyPress}
//     />
//   );
// };

// export default forwardRef(Textarea);
