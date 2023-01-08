import React, { useState, SyntheticEvent } from "react";
import TitleActionForm from "./title-action-form";
import styled from "@emotion/styled";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";
import MuiCard from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./modal";
import Message from "./message";
import Typography from "@mui/material/Typography";

export default function TitleActionButton({
  type,
  title,
  onUpdate,
  onDelete,
}: {
  type: ActionButtonType;
  title: string;
  onUpdate: (title: string) => void;
  onDelete?: () => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onClickDelete = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <Container onClick={() => setShowForm((prev) => !prev)}>
      <Card style={{ ...actionButtonData[type].formCardStyle }}>
        {showForm ? (
          <TitleActionForm
            type={type}
            title={title}
            onClose={() => setShowForm(false)}
            onUpdate={onUpdate}
          />
        ) : (
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        )}
        {type === "card" && onDelete && (
          <>
            <IconButton
              onClick={onClickDelete}
              aria-label="delete"
              className="icon"
              size={"small"}
              style={{ position: "absolute", top: 1, right: 1 }}
            >
              <DeleteIcon />
            </IconButton>
            <Modal show={showModal} onClose={onCloseModal}>
              <Message
                message="Continue to delete this list?"
                accept={{ text: "continue", action: onDelete }}
                refuse={{ text: "back", action: onCloseModal }}
              />
            </Modal>
          </>
        )}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  color: #28395a;
  font-size: 15px;
  background-color: #eaecf0;
  border-radius: 3;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

const Card = styled(MuiCard)`
  margin-bottom: 10px;

  .icon {
    visibility: hidden;
    transition: 0.2s;
    opacity: 0;
  }

  &:hover {
    .icon {
      visibility: visible;
      opacity: 1;
    }
  }
`;
