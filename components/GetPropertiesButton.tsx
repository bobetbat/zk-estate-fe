import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { useContractFunction, } from '../hooks/useContractFunction';
import { getNumberOfProperties } from '../config/contract';
import { useContractRead } from 'wagmi';

export const GetPropertiesButton: React.FC = () => {
  const owner = "0x577dD1DC79A13e02b07581BF1D31D3C585f9B4E7"

  const config = getNumberOfProperties({ owner })

  const { data, isError, isLoading } = useContractRead(config);

  return (
    <Container>
      <Typography variant="h1">{isLoading}</Typography>
      <Typography variant="h1">{isError ?? ''}</Typography>
      {/* <Stack mt='2rem' gap={1} direction='row' justifyContent='space-evenly'>
        <Button size='large' variant='contained' onClick={}>getNumberOfProperties</Button>
      </Stack> */}
    </Container>
  );
}

