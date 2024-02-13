import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRef, useState } from "react";
import ConfirmTransaction from "./ConfirmTransaction";

const SendModal = ({ open, closeModal, address }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [gas, setGas] = useState(0);

  const valueRef = useRef();

  const amountRef = useRef();

  const handleCLick = () => {
    setShowConfirm(true);
    // closeModal();
  };

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
          Send
          <IconButton onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <hr />
        <Box sx={{ marginTop: "1rem" }}>
          <label>Token</label>
          <TextField
            type="number"
            label="JumboCoin"
            placeholder="0"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            inputRef={amountRef}
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <label>Recipient</label>
          <TextField
            type="search"
            placeholder="Search or Paste Recipient Address"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            sx={{ alignItems: "center", display: "flex" }}
            inputRef={valueRef}
          />
        </Box>
        <hr style={{ marginTop: "2rem" }} />
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ marginTop: "2rem" }}
            onClick={handleCLick}
          >
            Send
          </Button>
          {showConfirm && (
            <ConfirmTransaction
              openConfirm={showConfirm}
              closeConfirm={() => {
                setShowConfirm(false);
              }}
              address={address}
              recieveAddress={valueRef.current.value}
              amount={amountRef.current.value}
              gas={gas}
            />
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SendModal;
