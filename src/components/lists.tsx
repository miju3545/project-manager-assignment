import React from "react";
import List from "./list";
import { ListType } from "../redux/lists";
import ActionButton from "./action-button";
import { DragDropContext } from "react-beautiful-dnd";

export default function Lists({ lists }: { lists: ListType[] }) {
  const onDragEnd = () => {
    console.log("dragging....");
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={styles.container}>
        {lists?.map((list) => (
          <List key={list.id} list={list} />
        ))}
        <ActionButton type={"list"} />
      </div>
    </DragDropContext>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: 8,
  },
};
