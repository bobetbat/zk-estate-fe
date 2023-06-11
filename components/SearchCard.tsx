import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

interface SearchCardProps {
  title: string;
  description: string;
  imageUrls: string[];
  handleDetail: () => void;
}

const SearchCard: React.FC<SearchCardProps> = ({ handleDetail, title, description, imageUrls }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = () => {
    selectedImageIndex + 1 < imageUrls.length ? setSelectedImageIndex(selectedImageIndex + 1) : setSelectedImageIndex(0);
  };

  return (
    <Card>
      <CardMedia
        onClick={() => handleImageClick()}
        sx={{ position: 'relative',height: '15rem' }}
      >
        <Image
          src={imageUrls[selectedImageIndex] ?? "/logo-dark.svg"}
          fill
          alt="logo"
        />
      </CardMedia>
      <CardContent>
        <Typography sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }} textOverflow='ellipsis' variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetail}>Details</Button>
      </CardActions>
    </Card >
  );
};

SearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchCard;
