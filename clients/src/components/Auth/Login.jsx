import { useState, useContext } from "react";
import { Typography, TextField, Box , Button} from "@mui/material";
import { UserContext } from "../../Context/UserContext";

function Login() {
    const {login} = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(userData);
    }
  return (
    <>
      <Typography variant="h4">Login</Typography>
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Button variant="contained" color="primary" >
          Login
        </Button>
      </Box>
    </>
  );
}
export default Login;
