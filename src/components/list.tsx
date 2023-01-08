import React, { useState } from "react";
import Card from "./card";
import { ListType, deleteList, updateListTitle } from "../redux/actions";
import AddActionButton from "./add-action-button";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import TitleActionButton from "./title-action-button";
import { useDispatch } from "react-redux";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import IconButton from "@mui/material/IconButton";
import Modal from "./modal";
import Message from "./message";

export default function List({
  index,
  list,
}: {
  index: number;
  list: ListType;
}) {
  const { id, title, cards } = list;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const executeAction = (listId: string) => (title: string) => {
    dispatch(updateListTitle(listId, title));
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Droppable droppableId={id}>
            {(provided) => (
              <ListContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="inner">
                  <TitleActionButton
                    type="list"
                    title={title}
                    onUpdate={executeAction(id)}
                  />
                  <IconButton
                    onClick={() => setShowModal(true)}
                    aria-label="more"
                    size="small"
                    style={{ paddingTop: 6, marginLeft: 4 }}
                  >
                    <MoreHorizSharpIcon />
                  </IconButton>
                  <Modal show={showModal} onClose={onCloseModal}>
                    <Message
                      message="해당 리스트를 삭제할까요?"
                      accept={{
                        text: "네",
                        action: () => dispatch(deleteList(id)),
                      }}
                      refuse={{ text: "아니요", action: onCloseModal }}
                    />
                  </Modal>
                </div>
                <div>
                  {cards?.map((card, index) => (
                    <Card key={card.id} listId={id} index={index} card={card} />
                  ))}
                </div>
                {provided.placeholder}
                <AddActionButton type="card" listId={list.id} />
              </ListContainer>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

const ListContainer = styled.div`
  background-color: #eaecf0;
  border-radius: 6px;
  min-width: 272px;
  padding: 6px;
  margin-right: 8px;

  .inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
