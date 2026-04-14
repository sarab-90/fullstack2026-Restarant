import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext } from "react";

function Header() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" mb={7} >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
            
          }}
        >
          <Button variant="contained" color="secondary">
            Logo
          </Button>
          <Typography variant="h3">Restaurant</Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button variant="text" color="inherit"
              onClick={() => navigate("/manager/categories")}
            >
              categories
            </Button>
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              Menu
            </Button>
            <Button variant="text" color="inherit">
              About
            </Button>
            <Button variant="text" color="inherit">
              Contact
            </Button>
            <Button variant="contained" color="primary">
              Reserve Now
            </Button>
            {user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
