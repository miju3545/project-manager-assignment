import React from "react";
import { useForm } from "react-hook-form";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";

type FormType = {
  title: string;
  onSubmit: () => void;
};

export default function TitleActionForm({
  type,
  title,
  onClose,
  onUpdate,
}: {
  type: ActionButtonType;
  title: string;
  onClose: () => void;
  onUpdate: (title: string) => void;
}) {
  const { control, getValues, handleSubmit } = useForm<FormType>({
    defaultValues: {
      title,
    },
  });

  const onSubmit = () => {
    const title = getValues("title");
    onUpdate(title);
    onClose();
  };

  const FormElement = actionButtonData[type].FormElement;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <FormElement
          name={"title"}
          control={control}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </label>
    </form>
  );
}
