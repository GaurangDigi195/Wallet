import { Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const FinalOnboard = () => {
  return (
    <div className="main">
      <Typography color="common.white" align="center">
        Are You Ready to Explore Solana?
      </Typography>
      <Typography variant="subtitle2" align="center">
        Some Text
      </Typography>
      <ButtonGroup>
        <Link to="/onbard2">
          <Button variant="outlined" sx={{ mr: "1rem" }}>
            Back
          </Button>
        </Link>
        <Link to="/portfolio">
          <Button variant="contained">Connect MetaMask</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default FinalOnboard;
