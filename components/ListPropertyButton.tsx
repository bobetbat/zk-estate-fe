import React, { useCallback } from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { useContractFunction } from '../hooks/useContractFunction';
import { listProperty } from '../config/contract';

export const ListPropertyButton: React.FC<{ config: any, title: string, callBack?: () => void }> = ({ config, title, callBack }) => {
  // const collateral = BigInt("1000")
  // const pricePerMonth = BigInt("100")

  //Mint Function
  const [
    write,
    hash,
    loading,
    success,
    error,
  ] = useContractFunction(config);

  const cb = useCallback(
    async () => {
      if (write) {
        await write()
      }
      // console.log('callBack', callBack)
      // console.log('success', success)
      if (callBack) {
        setTimeout(() => callBack(), 4000)

      }
    },
    [loading, success, write, callBack],
  )
  // console.log(success)
  return (
    <Stack maxWidth={'10rem'} >
      <Stack mt='2rem' gap={1} direction='row' justifyContent='space-evenly'>
        <Button size='large' variant='contained' onClick={cb}>{title}</Button>
      </Stack>
      <Typography variant="body1">{loading}</Typography>
      <Typography variant="body1">{error ?? ''}</Typography>
      <Typography variant="body1">{hash ?? 'no hash'}</Typography>
    </Stack>
  );
}

