import React, { useState, useEffect } from 'react';

export const useSubgraphRequest = (subgraph: string, url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSubgraphData = async () => {
    setLoading(true);
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + process.env.THE_GRAPH_API);
      const response = await fetch(url, {
        headers: headers,
        method: 'POST',
        body: subgraph,
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching subgraph data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubgraphData();
  }, [url, subgraph]);

  return { data, loading };
};
