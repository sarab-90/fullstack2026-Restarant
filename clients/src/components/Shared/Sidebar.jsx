import {Box, IconButton, List, ListItem, ListItemText, MenuItem, Typography } from "@mui/material"
import {UserContext} from "../../Context/UserContext.jsx"
import { useContext, useState } from "react";

function Sidebar({toggleSidebar, open}){
    const {user} = useContext(UserContext);
    return(
        <>
        <Box>
            <IconButton onClick={toggleSidebar}>
                <MenuItem/>
            </IconButton>
            {open && <Typography>Hello, {user.name} </Typography>}
            <List>
                <ListItem button>
                    <ListItemText primary={open ? "Dashboard" : "D"}/>
                </ListItem>
            </List>
        </Box>
        </>
    )
}
export default Sidebar;