import { useState, useContext } from "react";
import { Typography, TextField, Box , Button} from "@mui/material";
import { UserContext } from "../../Context/UserContext";

function Register() {
    const {register} = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
    const handleSubmit = (e) => {
        e.preventDefault();
        register(userData);
    }
  return (
    <>
      <Typography variant="h4">Register</Typography>
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
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
          Register
        </Button>
      </Box>
    </>
  );
}
export default Register;
