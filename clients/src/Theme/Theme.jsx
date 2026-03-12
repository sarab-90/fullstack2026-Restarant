import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d8b169",
      light: "#e2cfa3",
      dark: "#b48e3f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c5a059",
      light: "#d8b169",
      dark: "#9e7e43",
      contrastText: "#ffffff",
    },
    // creamy background
    background: {
      default: "#fdf7d8",
      paper: "#fdf7d8",
    },
    // text colors
    text: {
      primary: "#4a4031",
      secondary: "#4a4031",
    },
    success: {
      main: "#a5d6a7",
      light: "#c8e6c9",
      dark: "#81c784",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ef9a9a",
      light: "#ffcdd2",
      dark: "#e57373",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#4a4031",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#4a4031",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#4a4031",
    },
    body1: {
      fontSize: "1rem",
      color: "#4a4031",
    },
    body2: {
      fontSize: "0.875rem",
    },
    Button: {
      textTransform: "none",
      fontWeight: 500,
      color: "#4a4031",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#4a4031",
          backgroundColor: "#d8b169",
          fontWeight: "bold",
          borderRadius: 8,
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#c5a059",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#9e7e43",
            color: "#ffffff",
            fontWeight: "bold",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fdf7d8",
          borderRadius: 8,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});
export default theme;
