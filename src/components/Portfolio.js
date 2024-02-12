import {
  Box,
  Button,
  IconButton,
  Snackbar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import RecieveModal from "./RecieveModal";
import SendModal from "./SendModal";
import MyWallet from "./MyWallet";
import CopyToClipboard from "react-copy-to-clipboard";

const Portfolio = () => {
  let arr = [{ name: "JumboChain", value: "0", amount: "0" }];
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("xyz");
  const [assests, setAssests] = useState(arr);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
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
        <IconButton
          onClick={() => {
            setShowProfile(true);
          }}
        >
          <AccountCircleRoundedIcon />
        </IconButton>
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
        <IconButton
          onClick={() => {
            setShowProfile(true);
          }}
        >
          <AccountCircleRoundedIcon sx={{ ml: "1rem" }} />
        </IconButton>
        {showProfile && (
          <MyWallet
            open={showProfile}
            closeModal={() => {
              setShowProfile(false);
            }}
            amount={amount}
            address={code}
          />
        )}
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
            <CopyToClipboard text={code}>
              <ContentCopyRoundedIcon
                sx={{
                  mx: "1rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setBarOpen(true);
                }}
              />
            </CopyToClipboard>
            {barOpen && (
              <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={barOpen}
                onClose={() => {
                  setBarOpen(false);
                }}
                message="Text Copied To Clipboard"
              />
            )}
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
          <Button
            variant="outlined"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Recieve
          </Button>
          {showModal && (
            <RecieveModal
              open={showModal}
              closeModal={() => setShowModal(false)}
              address={code}
            />
          )}
          <Button
            variant="outlined"
            onClick={() => {
              setShowModal2(true);
            }}
          >
            Send
          </Button>
          {showModal2 && (
            <SendModal
              open={showModal2}
              closeModal={() => setShowModal2(false)}
            />
          )}
        </Box>
      </Box>
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "2rem",
          border: "solid",
          borderWidth: "0.1rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Assests
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
          }}
        >
          <Typography variant="subtitle2">Name</Typography>
          <Typography variant="subtitle2" sx={{ marginLeft: "30%" }}>
            Value
          </Typography>
          <Typography variant="subtitle2" sx={{ marginLeft: "22%" }}>
            Amount
          </Typography>
        </div>
        <hr style={{ marginTop: "1rem" }} />
        {assests.map((asset) => (
          <div
            key={asset}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {asset.name}
              </Typography>
              <Typography variant="subtitle1">Jumbo Coin</Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginLeft: "25%" }}
            >
              {asset.value}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginLeft: "25%" }}
            >
              {asset.amount}
            </Typography>
            <Button
              variant="outlined"
              sx={{ marginLeft: "25%" }}
              onClick={() => {
                setShowModal2(true);
              }}
            >
              Send
            </Button>
            <MoreVertIcon sx={{ marginRight: "2rem", marginLeft: "2rem" }} />
          </div>
        ))}
        <hr style={{ marginTop: "1rem" }} />
      </div>
    </Box>
  );
};

export default Portfolio;
