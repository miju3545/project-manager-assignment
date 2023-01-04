import React from "react";
import List from "./list";
import { ListType, rearrange } from "../redux/lists";
import ActionButton from "./add-action-button";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

export default function Lists({ lists }: { lists: ListType[] }) {
  const dispatch = useDispatch();
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    dispatch(
      rearrange(
        draggableId,
        source.droppableId,
        destination?.droppableId,
        source.index,
        destination?.index,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={"total"} direction={"horizontal"} type={"list"}>
        {(provided) => (
          <ListsContainer ref={provided.innerRef} {...provided.droppableProps}>
            {lists?.map((list, index) => (
              <List key={list.id} index={index} list={list} />
            ))}
            {provided.placeholder}
            <ActionButton type={"list"} />
          </ListsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const ListsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
`;
