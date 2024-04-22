import '../../style/Volunters.css'
import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const Volunters = ({ volunter }) => {
  return (
    <div className="volunterList">
      <Card sx={{ minHeight: "280px", width: 250 }}>
        <CardCover>
          <img src={volunter.img} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {volunter.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Volunters;
