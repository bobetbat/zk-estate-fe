import React, { useMemo, useState } from 'react';
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
import { contracts, selectWinner } from '../../config/contract';
import { useNetwork } from 'wagmi';
import { ListPropertyButton } from '../../components/ListPropertyButton';


const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const { chain } = useNetwork()
  const router = useRouter();

  const [tokenId, setTokenId] = useState(0)
  const [propertyId, setPropertyId] = useState(0)
  const stage = useMemo(() => router.query.stage, [router.query.stage])
  console.log('router.query.slug', router.query.slug)
  const { loading, error, data } = useQuery(GET_TENANT_PROPOSALS_BY_PROPERTY_ID, {
    variables: { propertyId: Number(router.query.slug) },
  });

  const handleClick = () => {
    dispatch(incrementByAmount(1))
  }

  const handleApprove = (tenant:any) => {
    // alert('Approved tenant')
    console.log('tenant', tenant)
    setTokenId(Number(tenant.proposalId))
    setPropertyId(Number(tenant.propertyId))
  }


  const config = selectWinner({ address: contracts[chain?.id ?? 420].rent, tokenId: tokenId, propertyId: propertyId, tokenURI: 'test' })
  console.log('tokenId', tokenId)
  return (
    <Layout header footer>
      <Box sx={{ flexGrow: 1, padding: 2, }}>
        <ProgressBar />
        <Paper sx={{ p: 2, marginTop: 4 }}>
          {(stage == '1' || stage == undefined) && <List>
            {(data && data.tenantProposalSubmitteds) ? data.tenantProposalSubmitteds.map((tenant: any) => <ListItem key={tenant.proposalId}>
              <ListItemText primary={tenant.tenant} />
              {Number(tokenId) === Number(tenant.proposalId) ? <ListPropertyButton callBack={() => router.push(`/contract/${router.query.slug}?stage=2`)} config={config} title='Approve' />
                : <Button onClick={() => handleApprove(tenant)} variant='contained' color='primary'>Select</Button>}
            </ListItem>) : null}
          </List>}
        </Paper>
      </Box>
    </Layout>
  )
}

export default Contract
