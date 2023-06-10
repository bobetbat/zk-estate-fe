import type { NextPage } from 'next';
import { Box, Typography } from "@mui/material"
import { Layout } from "../components/Layout"

const Page500 = () => {
  return (
    <Layout header>
      <Box mt='30vh'>
        <Typography variant='h4'>500 Something went wrong</Typography>
      </Box>
    </Layout>
  )
}

export default Page500;
