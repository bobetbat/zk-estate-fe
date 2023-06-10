import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";

export const AccountCard: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Card>
      <CardContent>
        <Typography textAlign='start' variant='h4'>Account {counter}</Typography>
        <Stack direction='row' gap={2} mt={1}>
          <Card sx={{ width: 240 }}>
            <Typography fontWeight={600} color='primary.main' variant='h5'>Confirm</Typography>
            <CardMedia
              sx={{ height: 240, width: 240 }}
              image='/logo.svg'
            // title="green iguana"
            />
          </Card>
          <Card sx={{ width: 240 }}>
            <Typography fontWeight={600} color='primary.main' variant='h5'>Confirm</Typography>
            <CardMedia
              sx={{ height: 240, width: 240 }}
              image='/logo.svg'

            // title="green iguana"
            />
          </Card>
          <Card sx={{ width: 240 }}>
            <Typography fontWeight={600} color='primary.main' variant='h5'>Confirm</Typography>
            <CardMedia
              sx={{ height: 240, width: 240 }}
              image='/logo.svg'

            // title="green iguana"
            />
          </Card>
          {/* <Box mt='12vh'>
              <Typography variant='h4'>Account {counter}</Typography>
              <Button onClick={handleClick} variant='contained' color='primary'> click me </Button>
            </Box> */}
        </Stack>
      </CardContent>
    </Card>
  )
}
