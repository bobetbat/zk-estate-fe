import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import { contracts, listProperty } from '../config/contract';
import { ListPropertyButton } from './ListPropertyButton';
import { useNetwork } from 'wagmi'

export const PropertyCard: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const { chain } = useNetwork()

  const dispatch = useDispatch()
  const handleClick = () => {
    // dispatch(incrementByAmount(2))

  }

  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  // const [startTime, setStartTime] = useState(0)
  // const [startTime, setStartTime] = useState(0)
  // startTime
  // endTime
  // tokenId(property ESTATE token id)
  // tokenURI(metadata)
  const tokenURI = JSON.stringify({
    id: 4,
    // contract: {
    //   address: '0x123',
    // },
    title: 'Luxury Apartment in Manhattan',
    description: 'Spacious 2-bedroom apartment with stunning views of Central Park.',
    location: 'Manhattan',
    price: 5000,
    imageUrls: [
      '/logo-dark.svg',
      '/logo-dark.svg',
      '/logo-dark.svg',
    ],
  }) 
  const tokenId = '3'
  const config = listProperty({ address: contracts[chain?.id ?? 420].rent, startTime, endTime, tokenId, tokenURI })

  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Typography textAlign='start' variant='h4'>Property {counter}</Typography>
          <Stack gap={2} mt={1}>
            <TextField value={startTime} onChange={(e) => setStartTime(Number(e.currentTarget.value))} id="startTime" label="Start" variant="outlined" />
            <TextField value={endTime} onChange={(e) => setEndTime(Number(e.currentTarget.value))} id="endTime" label="End" variant="outlined" />
            {/* <TextField id="outlined-basic" label="Address" variant="outlined" />
            <TextField id="outlined-basic" label="Address" variant="outlined" /> */}
            {/* <Button onClick={handleClick} variant='contained' color='primary'> click me </Button> */}
            <ListPropertyButton config={config} title='List property' />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
