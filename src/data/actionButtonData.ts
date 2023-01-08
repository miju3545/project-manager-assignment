import Textarea from "../components/textarea";
import Input from "../components/input";
import { addList, addCard, deleteCard } from "../redux/actions";

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
      padding: "6px 8px 2px",
      fontSize: 15,
    },
    FormElement: Textarea,
    dispatchAction: addCard,
    deleteAction: deleteCard,
  },
  list: {
    text: "Add another list",
    placeholder: "Enter list title...",
    buttonText: "Add List",
    buttonStyle: {
      textColor: "#fff",
      backgroundColor: "rgba(0,0,0,0.2)",
      width: 272,
    },
    formStyle: {
      padding: 6,
      minWidth: 272,
      fontSize: 15,
    },
    formCardStyle: {
      overflow: "visible",
      minHeight: 30,
      // minWidth: 272,
      padding: "6px 8px 2px",
    },

    FormElement: Input,
    dispatchAction: addList,
  },
};

export default actionButtonData;
