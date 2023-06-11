import type { NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchCard from '../components/SearchCard';
import SearchBar from '../components/SearchBar';
import FilterCheckboxes from '../components/Filter';
import { Layout } from '../components/Layout';

import { apartments, filterOptions } from '../config/mocks';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_LATEST_20_PROPERTY_LISTINGS } from '../config/query';



const Search: NextPage = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_LATEST_20_PROPERTY_LISTINGS, {
    variables: { first: 20, orderDirection: 'desc' },
  });

  // const filteredApartments = useMemo(() => {
  //   return apartments.filter((apartment) =>
  //     apartment.title.toLowerCase().includes(router)
  //   );
  // }, [apartments, router]);

  const handleSearchQueryChange = (value: string) => {
    router.push(`/search?location=${value}`);
  };

  const handleFilterChange = (filterName: string, value: string) => {
    // searchParams.set(filterName, value);
    router.query[filterName] = value;
    router.push(router);
  };

  console.log('data', data?.propertyListingCreateds) // json parse
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
        <Grid item xs={12} sm={6} md={3}>
          <FilterCheckboxes searchParams={router.query} onChange={handleFilterChange} options={filterOptions} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container xs={12}>
            {loading && <>Loading...</>}
            {error && <>{`Error! ${error.message}`}</>}
            {data?.propertyListingCreateds.map((apartment: any) => {
              if (apartment.propertyId == '1' || apartment.propertyId == '2') return
              return <Grid item xs={12} md={6} pl={3} pt={3} key={apartment.propertyId}>
                <SearchCard
                  landlord={apartment.landlord}
                  title={JSON.parse(apartment.tokenURI ?? '').title}
                  description={JSON.parse(apartment.tokenURI ?? '').description}
                  imageUrls={JSON.parse(apartment.tokenURI ?? '').imageUrls}
                  handleDetail={() => router.push(`/apartment/${apartment.propertyId}?landlord=${apartment.landlord}`)}
                />
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Search
