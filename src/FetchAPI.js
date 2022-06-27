import React, { useEffect, useState } from "react";

function FetchAPI(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(`https://api.github.com/users/sonalkarg`)
        .then((response) => response.json())
        .then(setData)
        .then(setLoading(false))
        .catch(setError);
    }, 1000);
  }, []);

  console.log(loading, error);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(data)}</pre>;
  if (!data) return null;
  return (
    <>
      <h1>Data Received</h1>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}

export default FetchAPI;
