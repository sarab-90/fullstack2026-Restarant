import { Container, Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        py: 5,
        mt: 5,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>RECTAURANT</Typography>
        <Typography variant="h6" gutterBottom>All rights reserved.</Typography>
      </Container>
    </Box>
  );
}
export default Footer;
