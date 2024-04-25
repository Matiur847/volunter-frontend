import React from "react";
import "../../style/ActiveVolunterCard.css";

import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const ActiveVolunterCard = ({ item }) => {
  console.log(item);
  return (
    <div className="activeVCard mt-5">
      <Card variant="outlined" orientation="horizontal">
        <AspectRatio ratio="1" sx={{ width: 120 }}>
          <img src={item.img} loading="lazy" alt={item.organize} />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
            {item.organize}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
          >
            <Link
              overlay
              underline="none"
              sx={{ color: "text.tertiary" }}
            >
              {item.date}
            </Link>
          </Typography>
          <button className="volunterCancelBtn mt-4">Cancel</button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveVolunterCard;
