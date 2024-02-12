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

const SendModal = ({ open, closeModal }) => {
  return (
    <Dialog open={open} onClose={closeModal} fullWidth>
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
          />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <label>Recipient</label>
          <TextField
            type="search"
            placeholder="Post Recipient Address"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            sx={{ alignItems: "center", display: "flex" }}
          />
        </Box>
        <hr style={{ marginTop: "2rem" }} />
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ marginTop: "2rem" }}>
            Send
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SendModal;
