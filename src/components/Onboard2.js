import { Typography, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Onboard2 = () => {
  return (
    <div>
      <Typography color="common.white" align="center">
        Solflare- Your Solana Companion
      </Typography>
      <Typography variant="subtitle2" align="center">
        Some Text
      </Typography>
      <ButtonGroup sx={{ mx: "50%" }}>
        <Button variant="outlined">
          <Link to="/">Back</Link>
        </Button>
        <Button variant="contained">
          <Link to="/finalonboard">Continue</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Onboard2;
