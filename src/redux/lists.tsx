const TYPES = {
  SYNC_LIST: "list/SYNC_LIST" as const,
  ADD_LIST: "list/ADD_LIST" as const,
  DELETE_LIST: "list/DELETE_LIST" as const,
  UPDATE_LIST_TITLE: "list/UPDATE_LIST_TITLE" as const,
  ADD_CARD: "card/ADD_CARD" as const,
  UPDATE_CARD_TITLE: "card/UPDATE_CARD_TITLE" as const,
  DELETE_CARD: "list/DELETE_CARD" as const,
  EXECUTE_DRAGD_AND_ROP: "drag/EXECUTE_DRAGD_AND_ROP" as const,
};

export const syncList = (lists: ListType[]) => ({
  type: TYPES.SYNC_LIST,
  payload: lists,
});

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
    type: TYPES.EXECUTE_DRAGD_AND_ROP,
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

type StateType = ListType[];
type ActionType =
  | ReturnType<typeof syncList>
  | ReturnType<typeof addList>
  | ReturnType<typeof deleteList>
  | ReturnType<typeof updateListTitle>
  | ReturnType<typeof addCard>
  | ReturnType<typeof updateCardTitle>
  | ReturnType<typeof deleteCard>
  | ReturnType<typeof rearrange>;

const setList = (lists: ListType[]) =>
  localStorage.setItem("lists", JSON.stringify(lists));

const initialState: StateType =
  JSON.parse(localStorage.getItem("lists") || "") || [];

let nextId = 1;

export default function listsReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  switch (action.type) {
    case TYPES.SYNC_LIST: {
      return action.payload;
    }

    case TYPES.ADD_LIST: {
      const copied = [...state];
      const newList = copied.concat({
        id: nextId++ + "",
        title: action.payload,
        cards: [],
      });

      setList(newList);

      return newList;
    }

    case TYPES.DELETE_LIST: {
      const newList = state.filter((list) => list.id !== action.payload);

      setList(newList);

      return newList;
    }

    case TYPES.UPDATE_LIST_TITLE: {
      const newList = state.map((list) => {
        const { listId, title } = action.payload;

        if (list.id === listId) {
          list.title = title;
        }
        return list;
      });

      setList(newList);

      return newList;
    }

    case TYPES.ADD_CARD: {
      const newList = state.filter((list) => {
        const targetList = list.id === action.payload.listId;

        if (targetList) {
          const newCard = {
            id: nextId++ + "",
            title: action.payload.title,
          };
          list.cards.push(newCard);
        }

        return list;
      });

      setList(newList);

      return newList;
    }

    case TYPES.UPDATE_CARD_TITLE: {
      const newList = state.map((list) => {
        const { listId, cardId, title } = action.payload;

        if (list.id === listId) {
          const cards = list.cards.map((card) => {
            if (card.id === cardId) {
              card.title = title;
            }

            return card;
          });
          return { ...list, cards };
        }
        return list;
      });

      setList(newList);

      return newList;
    }

    case TYPES.DELETE_CARD: {
      const { listId, cardId } = action.payload;

      const newList = state.map((list) => {
        if (list.id === listId) {
          const cards = list.cards.filter((card) => card.id !== cardId);
          list.cards = cards;
        }

        return list;
      });

      setList(newList);

      return newList;
    }

    case TYPES.EXECUTE_DRAGD_AND_ROP: {
      const {
        droppableStartId,
        droppableEndId,
        droppableStartIndex,
        droppableEndIndex,
        type,
      } = action.payload;

      const copied = [...state];

      if (type === "list") {
        const list = copied.splice(droppableStartIndex, 1)[0];
        copied.splice(droppableEndIndex, 0, list);
      }

      const onTheSameList = droppableStartId === droppableEndId;

      if (onTheSameList) {
        const list = copied.filter((list) => list.id === droppableStartId)[0];
        const card = list?.cards.splice(droppableStartIndex, 1)[0];
        if (card) {
          list?.cards.splice(droppableEndIndex, 0, card);
        }
      } else {
        const startList = copied.filter(
          (list) => list.id === droppableStartId
        )[0];
        const card = startList?.cards.splice(droppableStartIndex, 1)[0];
        const endList = copied.filter((list) => list.id === droppableEndId)[0];
        endList.cards.splice(droppableEndIndex, 0, card);
      }

      setList(copied);

      return copied;
    }
    default:
      return state;
  }
}
