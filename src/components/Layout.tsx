import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AppBar position="static" variant="outlined" color="transparent">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Reservation page
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
