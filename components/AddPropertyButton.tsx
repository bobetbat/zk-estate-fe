import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { useContractFunction } from '../hooks/useContractFunction';
import { addProperty } from '../config/contract';

export const AddPropertyButton: React.FC = () => {
  const collateral = BigInt("1000")
  const pricePerMonth = BigInt("100")
  const config = addProperty({ collateral, pricePerMonth })

  //Mint Function
  const [
    write,
    hash,
    loading,
    success,
    error,
  ] = useContractFunction(config);

  return (
    <Container>
      <Typography variant="h1">{loading}</Typography>
      <Typography variant="h1">{error ?? ''}</Typography>
      <Typography variant="h1">{hash ?? 'no hash'}</Typography>
      <Stack mt='2rem' gap={1} direction='row' justifyContent='space-evenly'>
        <Button size='large' variant='contained' onClick={write}>Add Property</Button>
      </Stack>
    </Container>
  );
}

