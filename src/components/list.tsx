import React from "react";
import Card from "./card";
import { CardType } from "../redux/lists";
import ActionButton from "./action-button";

export default function List({
  id,
  title,
  cards,
}: {
  id: string;
  title: string;
  cards: CardType[];
}) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <ul>
        {cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <ActionButton type="card" listId={id} />
    </div>
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
