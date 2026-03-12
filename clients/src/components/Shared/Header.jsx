import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <AppBar position="sticky">
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
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
