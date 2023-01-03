import Textarea from "../components/textarea";
import Input from "../components/input";
import { addList, addCard } from "../redux/lists";

const actionButtonData = {
  card: {
    text: "Add another card",
    placeholder: "Enter a title for this card...",
    buttonText: "Add Card",
    buttonStyle: {
      textColor: "inherit",
      backgroundColor: "inherit",
    },
    formStyle: {},
    formCardStyle: {
      overflow: "visible",
      minHeight: 80,
      minWidth: 272,
      padding: "6px 8px 2px",
    },
    FormElement: Textarea,
    dispatchAction: addCard,
  },
  list: {
    text: "Add another list",
    placeholder: "Enter list title...",
    buttonText: "Add List",
    buttonStyle: {
      textColor: "#fff",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    formStyle: {
      padding: 6,
    },
    formCardStyle: {
      overflow: "visible",
      minHeight: 30,
      minWidth: 272,
      padding: "6px 8px 2px",
    },
    FormElement: Input,
    dispatchAction: addList,
  },
};

export default actionButtonData;
