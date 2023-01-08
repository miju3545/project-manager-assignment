import Textarea from "../components/textarea";
import Input from "../components/input";
import { addList, addCard, deleteCard } from "../redux/actions";

const actionButtonData = {
  card: {
    text: "카드 추가하기",
    placeholder: "카드 제목을 입력하세요",
    buttonText: "추가하기",
    buttonStyle: {
      textColor: "inherit",
      backgroundColor: "inherit",
    },
    formStyle: {
      // padding: 6,
      minWidth: 272,
      fontSize: 15,
    },
    formCardStyle: {
      overflow: "visible",
      minHeight: 80,
      padding: "6px 8px 2px",
      fontSize: 15,
    },
    textCardStyle: {
      overflow: "visible",
      minHeight: 30,
      padding: "6px 8px 2px",
    },
    FormElement: Textarea,
    dispatchAction: addCard,
    deleteAction: deleteCard,
  },
  list: {
    text: "리스트 추가하기",
    placeholder: "리스트 제목을 입력하세요",
    buttonText: "추가하기",
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
      padding: "6px 8px 2px",
      width: "100%",
    },

    textCardStyle: {
      overflow: "visible",
      outline: "none",
      minHeight: 30,
      padding: "6px 8px 2px",
    },

    FormElement: Input,
    dispatchAction: addList,
  },
};

export default actionButtonData;
