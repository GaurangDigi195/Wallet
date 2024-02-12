import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  Snackbar,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const RecieveModal = ({ open, closeModal, address }) => {
  const [copyText, setCopyText] = useState(false);
  const [state, setState] = useState({
    barOpen: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, barOpen: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Dialog open={open} onClose={closeModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Receive JumboCoin
          <IconButton onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <hr />
        <DialogContentText>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2">Your Jnftc Address</Typography>
            <Typography variant="h4">{address}</Typography>
            <CopyToClipboard text={address} onCopy={() => setCopyText(true)}>
              <Button
                variant="contained"
                sx={{ marginTop: "2rem" }}
                onClick={handleClick({ vertical: "top", horizontal: "right" })}
              >
                Copy Address
              </Button>
            </CopyToClipboard>
            {copyText && (
              <Snackbar
                autoHideDuration={2000}
                anchorOrigin={{ vertical, horizontal }}
                open={handleClose}
                onClose={() => {
                  setCopyText(false);
                }}
                message="Text Copied To Clipboard"
                key={vertical + horizontal}
              />
            )}
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default RecieveModal;
