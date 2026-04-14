import { useState, useContext } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
  Paper,
} from "@mui/material";
import { UserContext } from "../../Context/UserContext.jsx";

function Register() {
  const { register } = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    hashed_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userData);
  };
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 10,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
          Create Account
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
        >
          <TextField
            label="Name"
            fullWidth   
            margin="normal"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={userData.hashed_password}
            onChange={(e) =>
              setUserData({ ...userData, hashed_password: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
export default Register;
