import React from "react";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./action-button";

export default function FormContainer({ type }: { type: ActionButtonType }) {
  return (
    <form>
      <input placeholder={actionButtonData[type].placeholder} />
      <button>{actionButtonData[type].buttonText}</button>
    </form>
  );
}
