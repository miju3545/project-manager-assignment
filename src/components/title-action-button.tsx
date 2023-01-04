import React, { useState } from "react";
import TitleForm from "./title-action-form";
import styled from "@emotion/styled";
import actionButtonData from "../data/actionButtonData";
import { ActionButtonType } from "./add-action-button";
import CardContent from "@mui/material/CardContent";
import MuiCard from "@mui/material/Card";

import Typography from "@mui/material/Typography";
const Card = styled(MuiCard)`
  margin-bottom: 10px;
`;
export default function TitleActionButton({
  type,
  title,
  executeAction,
}: {
  type: ActionButtonType;
  title: string;
  executeAction: (title: string) => void;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container onClick={() => setShowForm((prev) => !prev)}>
      <Card
        sx={{ minWidth: 272 }}
        style={{ ...actionButtonData[type].formCardStyle }}
      >
        {showForm ? (
          <TitleForm
            type={type}
            title={title}
            onClose={() => setShowForm(false)}
            executeAction={executeAction}
          />
        ) : (
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        )}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  color: #28395a;
  font-size: 15px;
  background-color: #eaecf0;
  border-radius: 3;
  width: 100%;
  margin-bottom: 10px;
`;
