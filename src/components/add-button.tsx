import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./action-button";

export default function AddButton({
  type,
  onClick,
}: {
  type: ActionButtonType;
  onClick: () => void;
}) {
  return (
    <div
      style={{ ...styles.container, ...actionButtonData[type].buttonStyle }}
      onClick={onClick}
    >
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
      <p>{actionButtonData[type].text}</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    background: "red",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    minWidth: 272,
    fontSize: 15,
  },
};
