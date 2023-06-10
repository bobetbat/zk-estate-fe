import type { NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchCard from '../components/SearchCard';
import SearchBar from '../components/SearchBar';
import FilterCheckboxes from '../components/Filter';
import { Layout } from '../components/Layout';

import { apartments, filterOptions } from '../config/mocks';
import { useRouter } from 'next/router';



const Search: NextPage = () => {
  const router = useRouter();
  // console.log('search',searchParams)
  console.log('router',router.query)

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

  // const { loading, error, data } = useGraph(getItems);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
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
            {apartments.map((apartment) => (
              <Grid item xs={12} md={6} pl={3} pt={3} key={apartment.id}>
                <SearchCard
                  title={apartment.title}
                  description={apartment.description}
                  imageUrls={apartment.imageUrls}
                  handleDetail={() => router.push(`/contract/${apartment.contract.address}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Search
