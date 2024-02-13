import {
  Dialog,
  DialogTitle,
  Box,
  IconButton,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Tick } from "./Tick";

const ConfirmTransaction = ({
  openConfirm,
  closeConfirm,
  address,
  recieveAddress,
  amount,
  gas,
}) => {
  const [success, setSuccess] = useState(false);

  const handleCLick = () => {
    setSuccess(true);
    setTimeout(() => {
      closeConfirm();
    }, 3000);
  };

  return (
    <Dialog
      open={openConfirm}
      onClose={closeConfirm}
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
          Confirm Transaction
          <IconButton onClick={closeConfirm}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <hr />
        <Box sx={{ marginTop: "1rem" }}>
          <label>Sender Address</label>
          <TextField
            defaultValue={address}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <label>Reciever Address</label>
          <TextField
            defaultValue={recieveAddress}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <label>Amount To Pay</label>
          <TextField
            defaultValue={amount}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            fullWidth
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <label>Gas Used</label>
          <TextField
            defaultValue={gas}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            fullWidth
          />
        </Box>
        <hr style={{ marginTop: "2rem" }} />
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ marginTop: "2rem" }}
            onClick={handleCLick}
          >
            Pay
          </Button>
          {success && <Tick size={50} style={{ display: "inline-block" }} />}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmTransaction;
