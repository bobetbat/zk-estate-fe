import { useState, useEffect,  } from 'react';
import { FetchError, Offer } from '../config/types';
import { mockPropertyOffers } from '../config/mocks';

export const usePropertyOffers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  // Define fetchOffers as a callback function
  const fetchOffers = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate fetching data. Replace this with your actual data fetching logic.
      const mockFetch = () => Promise.resolve(mockPropertyOffers); // Assuming mockOffers is available in this context
      const data = await mockFetch();
      setOffers(data);
    } catch (err) {
      console.error('Failed to fetch property offers:', err);
      setError((err as FetchError).message);
      // Here, you would typically log the error to an external service
    } finally {
      setLoading(false);
    }
  }; // Empty dependency array means fetchOffers doesn't depend on any external state or props

  useEffect(() => {
    fetchOffers();
  }, []); // Dependency array now includes fetchOffers

  return { offers, loading, error };
};

