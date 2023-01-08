import React from "react";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";
import { Card } from "@mui/material";
import MuiButton from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

type FormType = {
  title: string;
};

type ActionFormProps = {
  type: ActionButtonType;
  onClose: () => void;
  listId?: string;
};

export default function ActionForm({ type, onClose, listId }: ActionFormProps) {
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
    <Container style={actionButtonData[type].formStyle}>
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
        <ButtonWrapper>
          <SubmitButton type="submit" variant="contained">
            {actionButtonData[type].buttonText}
          </SubmitButton>
          <IconButton aria-label="add" onClick={() => onClose()}>
            <CloseIcon />
          </IconButton>
        </ButtonWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eaecf0;
  border-radius: 3;
`;

const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const SubmitButton = styled(MuiButton)`
  color: #fff;
  background-color: #0279c0;
  font-size: 12;
`;
