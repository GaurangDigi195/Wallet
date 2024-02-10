import { Box, Tab, Tabs, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";

const Portfolio = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs>
          <Tab label="Portfolio" />
          <Tab label="Collectibles" />
          <Tab label="Activity" />
        </Tabs>
        <EmojiEventsOutlinedIcon sx={{ ml: "10rem" }} />
        <SettingsOutlinedIcon sx={{ mx: "2rem" }} />
        <AccountCircleRoundedIcon />
      </Box>
      <Box>
        <AccountCircleRoundedIcon />
        <Typography variant="subtitle2">Total Portfolio value</Typography>
      </Box>
    </div>
  );
};

export default Portfolio;
