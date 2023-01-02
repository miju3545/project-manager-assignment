import React, { useState } from "react";

import AddButton from "./add-button";
import FormContainer from "./form-container";

export type ActionButtonType = "card" | "list";

export default function ActionButton({ type }: { type: ActionButtonType }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <FormContainer type={type} />
      ) : (
        <AddButton type={type} onClick={() => setShowForm(true)} />
      )}
    </>
  );
}
