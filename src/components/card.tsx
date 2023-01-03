import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardType } from "../redux/lists";
import { Draggable } from "react-beautiful-dnd";

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
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ minWidth: 272 }} style={styles.container}>
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
        </div>
      )}
    </Draggable>
  );
}

const styles = {
  container: {
    marginBottom: 10,
  },
};
