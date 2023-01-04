import React from "react";
import { CardType } from "../redux/lists";
import { Draggable } from "react-beautiful-dnd";
import TitleActionButton from "./title-action-button";
import { updateCardTitle } from "../redux/lists";
import { useDispatch } from "react-redux";

export default function EachCard({
  index,
  listId,
  card,
}: {
  index: number;
  listId: string;
  card: CardType;
}) {
  const { id, title } = card;
  const dispatch = useDispatch();

  const executeAction = (listId: string) => (title: string) => {
    dispatch(updateCardTitle(listId, id, title));
  };

  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TitleActionButton
            title={title}
            type={"card"}
            executeAction={executeAction(listId)}
          />
        </div>
      )}
    </Draggable>
  );
}
