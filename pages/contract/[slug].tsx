import React, { useMemo } from 'react';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementByAmount } from '../../store/reducers/counter';
// import { useParams } from 'react-router-dom';
import { Box, Button, ListItem, ListItemText, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { ProgressBar } from '../../components/ProgressBar';


const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const router = useRouter();
  const stage = useMemo(() => router.query.stage, [router.query.stage])

  const handleClick = () => {
    dispatch(incrementByAmount(1))
  }

  const handleApprove = () => {
    alert('Approved tenant')
  }

  return (
    <Layout header footer>
      <Box sx={{ flexGrow: 1, padding: 2, }}>
        <ProgressBar />
        <Paper sx={{ p: 2, marginTop: 4 }}>
          {(stage == '1' || stage == undefined) && <Box>
            {counter > 0 ? <ListItem>
              <ListItemText primary={'Candidate'} />
              <Button onClick={handleApprove} variant='contained' color='primary'>Approve</Button>
            </ListItem> : null}
          </Box>}
        </Paper>
      </Box>
    </Layout >
  )
}

export default Contract
