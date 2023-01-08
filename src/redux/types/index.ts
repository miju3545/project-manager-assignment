const TYPES = {
  ADD_LIST: "list/ADD_LIST" as const,
  DELETE_LIST: "list/DELETE_LIST" as const,
  UPDATE_LIST_TITLE: "list/UPDATE_LIST_TITLE" as const,
  DELETE_ALL_LIST: "list/DELETE_ALL_LIST" as const,
  ADD_CARD: "card/ADD_CARD" as const,
  UPDATE_CARD_TITLE: "card/UPDATE_CARD_TITLE" as const,
  DELETE_CARD: "list/DELETE_CARD" as const,
  REARRANGE: "drag/REARRANGE" as const,
};

export default TYPES;
