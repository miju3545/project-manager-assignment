import React from "react";
import Card from "./card";
import { ListType } from "../redux/lists";
import ActionButton from "./action-button";
import { Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

export default function List({ list }: { list: ListType }) {
  return (
    <Droppable droppableId={list.id}>
      {(provided) => (
        <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
          <Title>{list.title}</Title>
          <CardList>
            {list.cards?.map((card, index) => (
              <Card key={card.id} index={index} card={card} />
            ))}
          </CardList>
          <ActionButton type="card" listId={list.id} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
}

const ListContainer = styled.div`
  background-color: #eaecf0;
  border-radius: 3px;
  width: 300px;
  padding: 6px;
  margin-right: 8px;
`;

const Title = styled.h3`
  color: #28395a;
  font-size: 14px;
  padding: 10px 5px;
`;

const CardList = styled.div``;
