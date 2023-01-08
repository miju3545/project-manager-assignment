import { ListType } from "../redux/reducers/lists";

export const updateLists = (lists: ListType[]) =>
  localStorage.setItem("lists", JSON.stringify(lists));

export const getLists = (() => {
  let lists = localStorage.getItem("lists");

  return () => {
    if (!lists) lists = "[]";
    return JSON.parse(lists);
  };
})();
