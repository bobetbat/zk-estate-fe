import React from 'react';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementByAmount } from '../../store/reducers/counter';
// import { useParams } from 'react-router-dom';
import PropertyDetails from '../../components/PropertyDetails';
import { Button, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

const mockdata = { "id": "1234", "title": "Spacious 2-Bedroom Apartment in the Heart of the City", "description": "This beautiful 2-bedroom apartment is located in the heart of the city and offers stunning views of the skyline. It features a spacious living room, fully equipped kitchen, and modern amenities.", "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg", "https://example.com/image3.jpg"], "area": { "size": 1000, "unit": "sqft" }, "building": { "name": "The Tower", "address": "123 Main St, City, State Zip", "yearBuilt": 2015, "floors": 20, "amenities": ["Swimming Pool", "Fitness Center", "24-Hour Concierge"] }, "consumption": { "electricity": { "usage": 200, "unit": "kWh" }, "water": { "usage": 500, "unit": "gal" } }, "price": { "amount": 2500, "currency": "USD", "period": "month" } }

const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incrementByAmount(1))
    router.push('/contract/0x123')
  }

  const handleApprove = () => {
    alert('Approved tenant')
  }

  const router = useRouter()
  console.log('slug', router.query.slug)
  return (
    <Layout header footer>
      <PropertyDetails propertyDetail={mockdata} handleCollateralLock={handleClick} />
    </Layout >
  )
}

export default Contract
