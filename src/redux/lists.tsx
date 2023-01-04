const TYPES = {
  ADD_LIST: "list/ADD_LIST" as const,
  DELETE_LIST: "list/DELETE_LIST" as const,
  UPDATE_LIST_TITLE: "list/UPDATE_LIST_TITLE" as const,
  ADD_CARD: "card/ADD_CARD" as const,
  UPDATE_CARD_TITLE: "card/UPDATE_CARD_TITLE" as const,
  EXECUTE_DRAGD_AND_ROP: "drag/EXECUTE_DRAGD_AND_ROP" as const,
};

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

export const deleteCard = () => ({});

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
  | ReturnType<typeof addList>
  | ReturnType<typeof deleteList>
  | ReturnType<typeof updateListTitle>
  | ReturnType<typeof addCard>
  | ReturnType<typeof updateCardTitle>
  | ReturnType<typeof rearrange>;
// | ReturnType<typeof deleteCard>;

const initialState: StateType = [
  {
    id: "1",
    title: "진행 중",
    cards: [
      {
        id: "2",
        title: "type what you need.",
      },
      {
        id: "3",
        title: "type what you need.",
      },
    ],
  },
  {
    id: "4",
    title: "완료",
    cards: [
      {
        id: "5",
        title: "type what you need.",
      },
      {
        id: "6",
        title: "type what you need.",
      },
      {
        id: "7",
        title: "type what you need.",
      },
      {
        id: "8",
        title: "type what you need.",
      },
    ],
  },
];

export default function listsReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  const nextListId = Math.max(...state.map((list) => +list.id), 0);
  const nextCardId = Math.max(
    ...state.map((list) => list.cards?.map((card) => +card.id)).flat(),
    0
  );

  switch (action.type) {
    case TYPES.ADD_LIST: {
      const copiedLists = [...state];

      return copiedLists.concat({
        id: nextListId + 1 + "",
        title: action.payload,
        cards: [],
      });
    }
    case TYPES.DELETE_LIST: {
      return state.filter((list) => list.id !== action.payload);
    }

    case TYPES.UPDATE_LIST_TITLE: {
      return state.map((list) => {
        const { listId, title } = action.payload;

        if (list.id === listId) {
          list.title = title;
        }
        return list;
      });
    }
    case TYPES.ADD_CARD: {
      return state.filter((list) => {
        const targetList = list.id === action.payload.listId;

        if (targetList) {
          const newCard = {
            id: nextCardId + 1 + "",
            title: action.payload.title,
          };
          list.cards.push(newCard);
        }

        return list;
      });
    }

    case TYPES.UPDATE_CARD_TITLE: {
      return state.map((list) => {
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
        const list = state.filter((list) => list.id === droppableStartId)[0];
        const card = list?.cards.splice(droppableStartIndex, 1)[0];
        if (card) {
          list?.cards.splice(droppableEndIndex, 0, card);
        }
      } else {
        const startList = state.filter(
          (list) => list.id === droppableStartId
        )[0];
        const card = startList?.cards.splice(droppableStartIndex, 1)[0];

        const endList = state.filter((list) => list.id === droppableEndId)[0];

        endList.cards.splice(droppableEndIndex, 0, card);
      }

      return copied;
    }
    default:
      return state;
  }
}
