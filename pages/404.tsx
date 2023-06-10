import type { NextPage } from 'next';
import { Box, Typography } from "@mui/material"
import { Layout } from "../components/Layout"

const Page404: NextPage = () => {
  return (
    <Layout header>
      <Box mt='30vh'>
        <Typography variant='h4'>404 Page not found</Typography>
      </Box>
    </Layout>
  )
}

export default Page404;
