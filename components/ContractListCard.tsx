import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, ListItemButton, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import { useRouter } from 'next/router';

const contracts = [
  { address: '0x123', name: 'contract 1' },
]

export const ContractListCard: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const router = useRouter();

  const handleCreate = () => {
    router.push('/create-contract')
  }

  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Stack direction='row' justifyContent='space-between'>
            <Typography textAlign='start' variant='h4'>Contracts {counter}</Typography>
            <Button onClick={handleCreate} variant='contained' color='primary'>Create</Button>
          </Stack>
          {contracts.map((contract) => (
            <ListItemButton key={contract.address} component="a" href={`/contract/${contract.address}`}>
              <ListItemText primary={contract.name} />
            </ListItemButton>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
