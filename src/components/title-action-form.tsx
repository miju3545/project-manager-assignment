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
  executeAction,
}: {
  type: ActionButtonType;
  title: string;
  onClose: () => void;
  executeAction: (title: string) => void;
}) {
  const { control, getValues, handleSubmit } = useForm<FormType>({
    defaultValues: {
      title,
    },
  });

  const onSubmit = () => {
    const title = getValues("title");
    executeAction(title);
    onClose();
  };

  const FormElement = actionButtonData[type].FormElement;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormElement
        name={"title"}
        control={control}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </form>
  );
}
