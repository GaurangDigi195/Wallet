import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";

const Portfolio = () => {
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("xyz");
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
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
      <Box
        width="70%"
        sx={{
          mt: "2rem",
          display: "flex",
          alignItems: "center",
          mx: "auto",
          border: 1,
        }}
      >
        <AccountCircleRoundedIcon sx={{ ml: "1rem" }} />
        <Box sx={{ ml: "1rem" }}>
          <Typography variant="subtitle2">Total Portfolio value</Typography>
          <Typography variant="h4">{amount}</Typography>
        </Box>
        <Box sx={{ ml: "10%" }}>
          <Typography variant="subtitle2">Solana Wallet</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{code}</Typography>
            <ContentCopyRoundedIcon sx={{ mx: "1rem" }} />
            <QrCode2RoundedIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "40%",
          }}
        >
          <Button variant="outlined">Recieve</Button>
          <Button variant="outlined">Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
