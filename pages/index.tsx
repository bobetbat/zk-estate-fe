import type { NextPage } from 'next';
import React, { useEffect, useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchCard from '../components/SearchCard';
import SearchBar from '../components/SearchBar';
import { Layout } from '../components/Layout';

import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useContractRead, useNetwork, useToken } from 'wagmi';
import { usePropertyOffers } from '../hooks/usePropertyOffers';

const Home: NextPage = () => {
  const router = useRouter();
  const { chain } = useNetwork();

  // Use the custom hook to manage property offers
  const { offers, loading, error } = usePropertyOffers();

  const handleSearchQueryChange = (value: string) => {
    router.push(`/search?location=${value}`);
  };

  const handleFilterChange = (filterName: string, value: string) => {
    router.query[filterName] = value;
    router.push(router);
  };

  return (
    <Layout header footer>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center">
          Find Your Dream Apartment
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchBar onChange={handleSearchQueryChange} />
      </Grid>
      {/* Assuming filterOptions is defined elsewhere */}
      {/* <Grid item xs={0} md={12}>
        <FilterCheckboxes searchParams={router.query} onChange={handleFilterChange} options={[]} />
      </Grid> */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography>Error! {error}</Typography>}
          {offers.map((offer) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={offer.offerId}>
              <SearchCard
                // landlord={offer.landlord ?? 'N/A'} // Adjust based on your data structure
                title={offer.property.title}
                description={offer.property.description}
                imageUrls={offer.property.imageUrls}
                handleDetail={() => router.push(`/apartment/${offer.offerId}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Layout>
  );
};
export default Home
