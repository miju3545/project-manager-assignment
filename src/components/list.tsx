import React from "react";
import Card from "./card";
import { ListType } from "../redux/lists";
import ActionButton from "./action-button";
import { Droppable } from "react-beautiful-dnd";

export default function List({ list }: { list: ListType }) {
  return (
    <Droppable droppableId={list.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={styles.container}
        >
          <h3 style={styles.title}>{list.title}</h3>
          {list.cards?.map((card, index) => (
            <Card key={card.id} index={index} card={card} />
          ))}
          <ActionButton type="card" listId={list.id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

const styles = {
  container: {
    backgroundColor: "#eaecf0",
    borderRadius: 3,
    width: 300,
    padding: 6,
    marginRight: 8,
  },
  title: {
    color: "#28395a",
    fontSize: 14,
  },
};
