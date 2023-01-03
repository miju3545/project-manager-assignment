import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardType } from "../redux/lists";

export default function EachCard({ card }: { card: CardType }) {
  return (
    <Card sx={{ minWidth: 272 }} style={styles.container}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {card.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  container: {
    marginBottom: 10,
  },
};
