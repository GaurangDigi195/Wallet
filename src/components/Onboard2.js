import { Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Onboard2 = () => {
  return (
    <div className="main">
      <Typography color="common.white" align="center">
        Solflare- Your Solana Companion
      </Typography>
      <Typography variant="subtitle2" align="center">
        Some Text
      </Typography>
      <ButtonGroup>
        <Link to="/">
          <Button variant="outlined" sx={{ mr: "1rem" }}>
            Back
          </Button>
        </Link>
        <Link to="/finalonboard">
          <Button variant="contained">Continue</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Onboard2;
