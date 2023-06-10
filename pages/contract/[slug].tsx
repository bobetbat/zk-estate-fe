import React from 'react';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementByAmount } from '../../store/reducers/counter';
// import { useParams } from 'react-router-dom';
import { Box, Button, ListItem, ListItemText, Paper } from '@mui/material';
import { useRouter } from 'next/router';


const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(1))
  }
  const handleApprove = () => {
    alert('Approved tenant')
  }
  const router = useRouter()
  console.log('slug', router.query.slug)
  return (
    <Layout header footer>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Paper sx={{ p: 2, maxWidth: 800, margin: 'auto' }}>
          {counter > 0 ? <ListItem>
            <ListItemText primary={'Candidate'} />
            <Button onClick={handleApprove} variant='contained' color='primary'>Approve</Button>
          </ListItem> : null}
        </Paper>
      </Box>
    </Layout >
  )
}

export default Contract
