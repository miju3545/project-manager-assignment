import TYPES from "../types";

export const addList = (title: string) => ({
  type: TYPES.ADD_LIST,
  payload: title,
});

export const deleteList = (listId: string) => ({
  type: TYPES.DELETE_LIST,
  payload: listId,
});

export const updateListTitle = (listId: string, title: string) => ({
  type: TYPES.UPDATE_LIST_TITLE,
  payload: { listId, title },
});

export const addCard = (title: string, listId?: string) => ({
  type: TYPES.ADD_CARD,
  payload: { listId, title },
});

export const updateCardTitle = (
  listId: string,
  cardId: string,
  title: string
) => ({
  type: TYPES.UPDATE_CARD_TITLE,
  payload: { listId, cardId, title },
});

export const deleteCard = (listId: string, cardId: string) => ({
  type: TYPES.DELETE_CARD,
  payload: { listId, cardId },
});

export const rearrange = (
  draggableId: string,
  droppableStartId: string,
  droppableEndId: string,
  droppableStartIndex: number,
  droppableEndIndex: number,
  type: string
) => {
  return {
    type: TYPES.REARRANGE,
    payload: {
      draggableId,
      droppableStartId,
      droppableEndId,
      droppableStartIndex,
      droppableEndIndex,
      type,
    },
  };
};

export type CardType = {
  id: string;
  title: string;
};

export type ListType = {
  id: string;
  title: string;
  cards: CardType[];
};

export type StateType = ListType[];
export type ActionType =
  | ReturnType<typeof addList>
  | ReturnType<typeof deleteList>
  | ReturnType<typeof updateListTitle>
  | ReturnType<typeof addCard>
  | ReturnType<typeof updateCardTitle>
  | ReturnType<typeof deleteCard>
  | ReturnType<typeof rearrange>;
