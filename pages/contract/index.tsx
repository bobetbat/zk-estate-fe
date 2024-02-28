import React, { useMemo, useState } from 'react';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementByAmount } from '../../store/reducers/counter';
// import { useParams } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ProgressBar } from '../../components/ProgressBar';
import { useQuery } from '@apollo/client';
import { GET_TENANT_PROPOSALS_BY_TENANT } from '../../config/query';
import { contracts, selectWinner } from '../../config/contract';
import { useAccount, useNetwork } from 'wagmi';
import { ActionButton } from '../../components/ActionButton';
import { short } from '../../utils/string';


const Contracts: React.FC = () => {
  const dispatch = useDispatch()
  const { address, isConnecting, isDisconnected } = useAccount()
  const { chain } = useNetwork()
  const router = useRouter();

  const [tokenId, setTokenId] = useState(0)
  const [propertyId, setPropertyId] = useState(0)
  const stage = useMemo(() => router.query.stage, [router.query.stage])
  // console.log('router.query.slug', router.query.slug)
  const { loading, error, data } = useQuery(GET_TENANT_PROPOSALS_BY_TENANT, {
    variables: { tenant: address },
  });

  console.log('address', address)
  console.log('router.query.landlord', data)

  return (
    <Layout header footer>
      <Typography variant='h2'>My proposals</Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          {(data && data.tenantProposalSubmitteds) ? data.tenantProposalSubmitteds.map((proposal: any) => <ListItemButton onClick={() => router.push(`/contract/${proposal.propertyId}`)} key={proposal.proposalId}>
            <ListItemText primary={short(proposal.id)} />
          </ListItemButton>) : null}
        </List>
      </Paper>
    </Layout>
  )
}

export default Contracts
