import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  ImageList,
  ImageListItem,
  Stack,
} from '@mui/material';
// import logo from "./../logo.svg";

interface PropertyDetail {
  id: string;
  title: string;
  description: string;
  images: string[];
  area: {
    size: number;
    unit: string;
  };
  building: {
    name: string;
    address: string;
    yearBuilt: number;
    floors: number;
    amenities: string[];
  };
  consumption: {
    electricity: {
      usage: number;
      unit: string;
    };
    water: {
      usage: number;
      unit: string;
    };
  };
  price: {
    amount: number;
    currency: string;
    period: string;
  };
}

interface Props {
  propertyDetail: PropertyDetail;
  handleCollateralLock: () => void;
}

const Image = styled('img')({
  width: '100%',
  height: 'auto',
});

const AmenitiesWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const PropertyDetailPage: React.FC<Props> = ({ propertyDetail, handleCollateralLock }) => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(propertyDetail)
  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex < propertyDetail.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : propertyDetail.images.length - 1
    );
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Paper sx={{ p: 2, maxWidth: 800, margin: 'auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ImageList sx={{ width: '100%', height: 'auto' }} cols={1}>
              {propertyDetail.images.map((image, index) => (
                <ImageListItem key={index}>
                  <Image
                    src={image}
                    alt={propertyDetail.title}
                    style={{
                      display: index === imageIndex ? 'block' : 'none',
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Stack direction='row' justifyContent='space-between'>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: 1 }}
                onClick={handlePrevImage}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: 1 }}
                onClick={handleNextImage}
              >
                Next
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              {propertyDetail.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {propertyDetail.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Building Details
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Name: {propertyDetail.building.name}
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Address: {propertyDetail.building.address}
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Year Built: {propertyDetail.building.yearBuilt}
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Floors: {propertyDetail.building.floors}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Amenities
            </Typography>
            <AmenitiesWrapper>
              {propertyDetail.building.amenities.map((amenity) => (
                <Typography variant="body1" textAlign="start" key={amenity}>
                  - {amenity}
                </Typography>
              ))}
            </AmenitiesWrapper>
            <Typography variant="h6" gutterBottom>
              Consumption
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Electricity Usage: {propertyDetail.consumption.electricity.usage}{' '}
              {propertyDetail.consumption.electricity.unit}
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              Water Usage: {propertyDetail.consumption.water.usage}{' '}
              {propertyDetail.consumption.water.unit}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price
            </Typography>
            <Typography variant="body1" textAlign="start" gutterBottom>
              {propertyDetail.price.amount} {propertyDetail.price.currency} per{' '}
              {propertyDetail.price.period}
            </Typography>
            <Button onClick={() => { alert(`Collateral locked ${propertyDetail.price.amount}`); handleCollateralLock() }} variant='contained' color='primary'>Lock Collateral</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PropertyDetailPage;
