import React, { useMemo } from 'react';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementByAmount } from '../../store/reducers/counter';
// import { useParams } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { ProgressBar } from '../../components/ProgressBar';
import { useQuery } from '@apollo/client';
import { GET_TENANT_PROPOSALS_BY_PROPERTY_ID } from '../../config/query';


const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const router = useRouter();
  const stage = useMemo(() => router.query.stage, [router.query.stage])
  console.log('router.query.slug', router.query.slug)
  const { loading, error, data } = useQuery(GET_TENANT_PROPOSALS_BY_PROPERTY_ID, {
    variables: { propertyId: Number(router.query.slug) },
  });

  const handleClick = () => {
    dispatch(incrementByAmount(1))
  }

  const handleApprove = () => {
    alert('Approved tenant')
  }

  console.log('data', data.tenantProposalSubmitteds)

  return (
    <Layout header footer>
      <Box sx={{ flexGrow: 1, padding: 2, }}>
        <ProgressBar />
        <Paper sx={{ p: 2, marginTop: 4 }}>
          {(stage == '1' || stage == undefined) && <List>
            {(data && data.tenantProposalSubmitteds) ? data.tenantProposalSubmitteds.map((tenant: any) => <ListItem key={tenant.proposalId}>
              <ListItemText primary={tenant.tenant} />
              <Button onClick={handleApprove} variant='contained' color='primary'>Approve</Button>
            </ListItem>) : null}
          </List>}
        </Paper>
      </Box>
    </Layout>
  )
}

export default Contract
