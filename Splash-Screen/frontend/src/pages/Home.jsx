import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Checkbox,
  Button
} from "@mui/material";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    alert("Redirecting to Login Page...");
    navigate("/login");
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={3} alignItems="center">
        <Box
          component="img"
          src="/logo.png"
          alt="College Logo"
          sx={{ width: 200 }}
        />

        <Typography variant="h5" fontWeight="bold">
          SWARNAMALI GIRLS' COLLEGE, KANDY
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Student Management System
        </Typography>

        <Stack direction="row" alignItems="center">
          <Checkbox
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <Typography>Accept Terms and Conditions</Typography>
        </Stack>

        <Button
          variant="contained"
          color="success"
          disabled={!accepted}
          onClick={handleLoginClick}
        >
          Already Have an Account?
        </Button>
      </Stack>
    </Box>
  );
}
