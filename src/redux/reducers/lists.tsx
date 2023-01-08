import { v4 as uuid } from "uuid";
import { updateLists, getLists } from "../../utils/localStorage";
import TYPES from "../types";
import { StateType, ActionType } from "../actions";

const initialState: StateType = getLists();

export default function listsReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  switch (action.type) {
    case TYPES.ADD_LIST: {
      const copied = [...state];
      const newList = copied.concat({
        id: uuid() + "",
        title: action.payload,
        cards: [],
      });

      updateLists(newList);

      return newList;
    }

    case TYPES.DELETE_LIST: {
      const newList = state.filter((list) => list.id !== action.payload);

      updateLists(newList);

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

      updateLists(newList);

      return newList;
    }

    case TYPES.ADD_CARD: {
      const newList = state.filter((list) => {
        const targetList = list.id === action.payload.listId;

        if (targetList) {
          const newCard = {
            id: uuid() + "",
            title: action.payload.title,
          };
          list.cards.push(newCard);
        }

        return list;
      });

      updateLists(newList);

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

      updateLists(newList);

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

      updateLists(newList);

      return newList;
    }

    case TYPES.REARRANGE: {
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

      updateLists(copied);

      return copied;
    }
    case TYPES.DELETE_ALL_LIST: {
      updateLists([]);
      return [];
    }
    default:
      return state;
  }
}
