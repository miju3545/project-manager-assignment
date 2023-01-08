import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { DeleteAllLists } from "../redux/actions/index";
import Modal from "./modal";
import Message from "./message";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export default function GNB() {
  const [showModal, setShowModal] = useState(false);
  const lists = useSelector((state: RootState) => state.lists);
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(DeleteAllLists());
    onCloseModal();
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Nav>
      {lists.length > 0 && (
        <>
          <IconButton onClick={() => setShowModal(true)}>
            <DeleteIcon />
          </IconButton>
          <Modal show={showModal} onClose={onCloseModal}>
            <Message
              message="모든 리스트를 삭제할꺄요?"
              accept={{ text: "네", action: onDelete }}
              refuse={{ text: "아니요", action: onCloseModal }}
            />
          </Modal>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 6px;
  height: 56px;
`;
