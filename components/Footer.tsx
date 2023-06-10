import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/material';

export const Footer: React.FC = () => {

  return (
    <footer>
      <Stack sx={{ bottom: 1, bgcolor: 'primary.main', justifySelf: 'flex-end' }}>
        <Box maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}>

            </Box>
          </Toolbar>
        </Box>
      </Stack>
    </footer>
  );
};
