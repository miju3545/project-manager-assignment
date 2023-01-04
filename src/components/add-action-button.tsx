import React, { useState } from "react";

import AddButton from "./add-button";
import ActionForm from "./add-action-form";

export type ActionButtonType = "card" | "list";

export default function ActionButton({
  type,
  listId,
}: {
  type: ActionButtonType;
  listId?: string;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <ActionForm
          type={type}
          onClose={() => setShowForm(false)}
          listId={listId}
        />
      ) : (
        <AddButton type={type} onClick={() => setShowForm(true)} />
      )}
    </>
  );
}
