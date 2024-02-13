import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Onboard = () => {
  return (
    <div className="main">
      <Typography variant="h5" color="common.white">
        Enter Solana with MetaMask Snap
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ width: "100%", textAlign: "center" }}
      >
        You're about to install Solana App
      </Typography>
      <Link to="/onbard2">
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{ width: "100%" }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Onboard;
