import React from "react";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

type FormType = {
  title: string;
};

export default function ActionForm({
  type,
  onClose,
  listId,
}: {
  type: ActionButtonType;
  onClose: () => void;
  listId?: string;
}) {
  const { control, handleSubmit, getValues } = useForm<FormType>({
    defaultValues: {
      title: "",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    const title = getValues("title");

    if (!title) return;

    dispatch(actionButtonData[type].dispatchAction(title, listId));
    onClose();
  };

  const FormElement = actionButtonData[type].FormElement;

  return (
    <div style={{ ...styles.container, ...actionButtonData[type].formStyle }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card style={{ ...actionButtonData[type].formCardStyle }}>
          {
            <FormElement
              name={"title"}
              control={control}
              placeholder={actionButtonData[type].placeholder}
              onSubmit={onSubmit}
              onClose={onClose}
            />
          }
        </Card>
        <div style={styles.button}>
          <Button
            type="submit"
            variant="contained"
            style={{
              color: "#FFF",
              backgroundColor: "#0279c0",
              fontSize: 12,
            }}
          >
            {actionButtonData[type].buttonText}
          </Button>
          <IconButton aria-label="add">
            <CloseIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#eaecf0",
    borderRadius: 3,
  },
  button: { marginTop: 8, display: "flex", allignItems: "center" },
};
