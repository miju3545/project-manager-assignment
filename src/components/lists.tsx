import React from "react";
import List from "./list";
import { ListType } from "../redux/lists";

export default function Lists({ lists }: { lists: ListType[] }) {
  return (
    <div style={styles.container}>
      {lists?.map((list) => (
        <List key={list.id} title={list.title} cards={list.cards} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    marginRight: 8,
  },
};
