import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Onboard = () => {
  return (
    <div>
      <Typography color="common.white" align="center">
        Enter Solana with MetaMask Snap
      </Typography>
      <Typography variant="subtitle2" align="center">
        You're about to install Solana App
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="medium"
        sx={{ mx: "50%" }}
      >
        <Link to="/onbard2">Continue</Link>
      </Button>
    </div>
  );
};

export default Onboard;
