import { MenuContext } from "../../Context/MenuContex.jsx";
import { useContext } from "react";
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import Header from "../Shared/Header.jsx";

function Home() {
  const { fetchMenu, menu } = useContext(MenuContext);
  console.log(fetchMenu);

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        mt={4}
      >
        {menu.map((item) => {
          return (
            <Card key={item.menuId} sx={{ width: 300 }}>
              <CardMedia 
              component="img" 
              height="180px" 
              image={item.image}
              alt={item.name} 
              />
              <CardHeader title={item.name}/>

              <CardContent>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>
                  {item.price}
                </Typography>

                <Stack direction="row">
                  <Button>Add To Card</Button> 
                  <Button>View Details</Button>                    
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
export default Home;
