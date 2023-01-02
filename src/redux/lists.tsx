const TYPES = {
  CREATE: "list/CREATE" as const,
  DELETE: "list/DELETE" as const,
};

export const createList = (title: string) => ({
  type: TYPES.CREATE,
  payload: title,
});
export const deleteList = (id: string) => ({ type: TYPES.DELETE, payload: id });

export type CardType = {
  id: string;
  content: string;
};

export type ListType = {
  id: string;
  title: string;
  cards: CardType[];
};

type StateType = ListType[];
type ActionType = ReturnType<typeof createList> | ReturnType<typeof deleteList>;

const initialState: StateType = [
  {
    id: "1",
    title: "진행 중",
    cards: [
      {
        id: "1",
        content: "type what you need.",
      },
      {
        id: "2",
        content: "type what you need.",
      },
    ],
  },
  {
    id: "2",
    title: "완료",
    cards: [
      {
        id: "3",
        content: "type what you need.",
      },
      {
        id: "4",
        content: "type what you need.",
      },
    ],
  },
];
export default function listsReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  switch (action.type) {
    case TYPES.CREATE:
      return [...state];
    case TYPES.DELETE:
      return [...state];
    default:
      return state;
  }
}
