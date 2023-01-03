const TYPES = {
  ADD_LIST: "list/ADD_LIST" as const,
  DELETE_LIST: "list/DELETE_LIST" as const,
  ADD_CARD: "card/ADD_CARD" as const,
};

export const addList = (title: string) => ({
  type: TYPES.ADD_LIST,
  payload: title,
});
export const deleteList = (id: string) => ({
  type: TYPES.DELETE_LIST,
  payload: id,
});
export const addCard = (title: string, listId?: string) => ({
  type: TYPES.ADD_CARD,
  payload: { listId, title },
});
export const deleteCard = () => ({});

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
  | ReturnType<typeof addCard>;
// | ReturnType<typeof deleteCard>;

const initialState: StateType = [
  {
    id: "1",
    title: "진행 중",
    cards: [
      {
        id: "1",
        title: "type what you need.",
      },
      {
        id: "2",
        title: "type what you need.",
      },
    ],
  },
  {
    id: "2",
    title: "완료",
    cards: [
      {
        id: "3",
        title: "type what you need.",
      },
      {
        id: "4",
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
      const copiedLists = [...state];

      return copiedLists.filter((list) => list.id !== action.payload);
    }

    case TYPES.ADD_CARD: {
      const copiedLists = [...state];

      return copiedLists.filter((list) => {
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
    default:
      return state;
  }
}
