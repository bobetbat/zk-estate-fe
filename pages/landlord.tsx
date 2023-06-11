import React from 'react';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
// import { AccountCard } from '../components/AccountCard';
import { PropertyCard } from '../components/PropertyCard';
// import { ContractListCard } from '../components/ContractListCard';

 const Account: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Layout header footer>
      {/* <AccountCard /> */}
      <PropertyCard />

      {/* <ContractListCard /> */}
    </Layout>
  )
}
export default Account
