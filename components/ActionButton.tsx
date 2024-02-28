import React, { useCallback } from 'react';
import { Container, Typography, Stack, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useContractFunction } from '../hooks/useContractFunction';
import { listProperty } from '../config/contract';
import Link from 'next/link';
import { useNetwork } from 'wagmi';
import { short } from '../utils/string';

export const ActionButton: React.FC<{
  config: any,
  title: string,
  callBack?: () => void
}> = ({ config, title, callBack }) => {
  const { chain, chains } = useNetwork()
  const [
    write,
    hash,
    loading,
    success,
    error,
  ] = useContractFunction(config);
  // console.log("CHAINS", chain, chains)
  console.log('success', success)
  console.log('loading', loading)
  return (
    <Stack>
      <LoadingButton
        disabled={success || !!hash}
        loading={loading && !hash}
        size='large'
        variant='contained'
        onClick={write}
      >
        {title}
      </LoadingButton>
      {hash && <Box>
        Explorer:
        <Link href={`${chain?.blockExplorers?.default.url}/tx/${hash}`}>
          {short(hash)}
        </Link>
      </Box>}
      {error && <Box>
        <Typography color='error' variant="body1">{error}</Typography>
      </Box>}
    </Stack>
  );
}

