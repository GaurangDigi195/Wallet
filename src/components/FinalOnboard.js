import { Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const FinalOnboard = () => {
  return (
    <div>
      <Typography color="common.white" align="center">
        Are You Ready to Explore Solana?
      </Typography>
      <Typography variant="subtitle2" align="center">
        Some Text
      </Typography>
      <ButtonGroup sx={{ mx: "50%" }}>
        <Button variant="outlined">
          <Link to="/onbard2">Back</Link>
        </Button>
        <Button variant="contained">Connect MetaMask</Button>
      </ButtonGroup>
    </div>
  );
};

export default FinalOnboard;
