import React from "react";
import Card from "./card";
import { ListType, updateListTitle } from "../redux/lists";
import AddActionButton from "./add-action-button";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import TitleActionButton from "./title-action-button";
import { useDispatch } from "react-redux";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import IconButton from "@mui/material/IconButton";

export default function List({
  index,
  list,
}: {
  index: number;
  list: ListType;
}) {
  const { id, title, cards } = list;
  const dispatch = useDispatch();

  const executeAction = (listId: string) => (title: string) => {
    dispatch(updateListTitle(listId, title));
  };

  return (
    <Draggable draggableId={list.id} index={index}>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <TitleActionButton
                    type="list"
                    title={title}
                    executeAction={executeAction(id)}
                  />
                  <IconButton
                    aria-label="more"
                    size="small"
                    style={{ paddingTop: 6, marginLeft: 4 }}
                  >
                    <MoreHorizSharpIcon />
                  </IconButton>
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
  border-radius: 3px;
  min-width: 272px;
  padding: 6px;
  margin-right: 8px;
`;
