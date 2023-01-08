import React from "react";
import { CardType, deleteCard } from "../redux/actions";
import { Draggable } from "react-beautiful-dnd";
import TitleActionButton from "./title-action-button";
import { updateCardTitle } from "../redux/actions";
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

  const onUpdate = (listId: string) => (title: string) => {
    dispatch(updateCardTitle(listId, id, title));
  };

  const onDelete = () => {
    dispatch(deleteCard(listId, id));
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
            onUpdate={onUpdate(listId)}
            onDelete={onDelete}
          />
        </div>
      )}
    </Draggable>
  );
}
