import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";
import styled from "@emotion/styled";

export default function AddButton({
  type,
  onClick,
}: {
  type: ActionButtonType;
  onClick: () => void;
}) {
  return (
    <ButtonContainer
      style={{ ...actionButtonData[type].buttonStyle }}
      onClick={onClick}
    >
      <IconButton aria-label="add" style={{ paddingBottom: 10 }}>
        <AddIcon />
      </IconButton>
      <p>{actionButtonData[type].text}</p>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  background-color: red;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  font-size: 15px;
`;
