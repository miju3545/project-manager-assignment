import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardType } from "../redux/lists";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function EachCard({ card }: { card: CardType }) {
  return (
    <Card sx={{ minWidth: 272 }} style={styles.container}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {card.content}
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
