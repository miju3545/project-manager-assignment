import React from "react";
import List from "./list";
import { ListType, rearrange } from "../redux/lists";
import ActionButton from "./action-button";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

export default function Lists({ lists }: { lists: ListType[] }) {
  const dispatch = useDispatch();
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    dispatch(
      rearrange(
        draggableId,
        source.droppableId,
        destination?.droppableId,
        source.index,
        destination?.index
      )
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ListsContainer>
        {lists?.map((list) => (
          <List key={list.id} list={list} />
        ))}
        <ActionButton type={"list"} />
      </ListsContainer>
    </DragDropContext>
  );
}

const ListsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
`;
