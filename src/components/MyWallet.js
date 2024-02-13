import {
  Dialog,
  DialogTitle,
  Box,
  IconButton,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const MyWallet = ({ open, closeModal, amount, address }) => {
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "#2f4f4f",
          boxShadow: "none",
        },
      }}
      sx={{
        backdropFilter: "blur(5px)",
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          My Wallet
          <IconButton onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <hr />
        <DialogContentText>
          <Typography variant="subtitle2">Net Worth</Typography>
          <Typography variant="h4">{amount}</Typography>
          <Typography variant="subtitle2" sx={{ paddingTop: "0.5rem" }}>
            MetaMask
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "solid",
              borderWidth: "0.1rem",
              paddingY: "0.5rem",
            }}
            onClick={closeModal}
          >
            <AccountCircleRoundedIcon />
            <Box sx={{ ml: "1rem" }}>
              <Typography variant="subtitle1">
                <b>JumboChain Wallet</b>
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: "1rem" }}>
                {address}
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", right: "10%" }}>
              <Typography variant="subtitle2">
                <b>{amount}</b>
              </Typography>
            </Box>
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default MyWallet;
