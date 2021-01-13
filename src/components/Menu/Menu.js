import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import NavLinkCustom from "../Link/CustomNavLink";
function Menu(params) {
  return (
    <AppBar>
      <Toolbar >
        <GridContainer >
          <GridItem xs={12} md={3} >
            <Typography bold variant="h2">
              aaa
          </Typography>
          </GridItem>
          <GridItem xs={12} md={9}>
            <Box display="flex" alignItems="center">
              <NavLinkCustom
                link="/"
                text='home'
              />
              <NavLinkCustom
                link="/users"
                text='users'
              />
              <NavLinkCustom
                link="/dropDrap"
                text='dropDrap'
              />
            </Box>
          </GridItem>
        </GridContainer>
      </Toolbar>
    </AppBar>)
}
export default Menu