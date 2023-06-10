import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
};

export const Layout: React.FC<Props> = ({ children, footer, header }) => {
  return (
    <>
      <main>
        {header && <Header />}
        <Stack sx={{
          minHeight: '100vh',
          width: '100vw',
          mt: '12vh',
          mb: '6vh',
          px: { xs: 2, sm: 5, md: 10, lg: 20 },
          gap: 4
        }}>
          {children}
        </Stack>
      </main>

      {footer && <Footer />}
    </>
  );
}
