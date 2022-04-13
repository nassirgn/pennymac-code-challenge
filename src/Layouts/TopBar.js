import React from 'react'
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import Logo from "../components/Logo";
const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1, bgColor: theme => theme.palette.primary.main }}>
      <AppBar position="static" >
        <Toolbar sx={{ }}>
            <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quotes App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar