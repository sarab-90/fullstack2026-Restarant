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
            color: "white",
            gap: 5,
          }}
        >
          <Typography variant="h3">Restaurant</Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              color: "black",
            }}
          >
            <Button>Home</Button>
            <Button>Menu</Button>
            <Button>About</Button>
            <Button>Contact</Button>
            <Button>Reserve Now</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
