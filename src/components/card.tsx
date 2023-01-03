import React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardType } from "../redux/lists";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

export default function EachCard({
  index,
  card,
}: {
  index: number;
  card: CardType;
}) {
  return (
    <Draggable index={index} draggableId={card.id}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ minWidth: 272 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
}

const styles = {
  container: {
    marginBottom: 10,
  },
};

const CardContainer = styled.div``;
const Card = styled(MuiCard)`
  margin-bottom: 10px;
`;
