import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

const Index: NextPage = () => {
  const { data, error } = useQuery(['users'], () =>
    fetcher('{ users { name } }')
  );

  return (
    <div>
      <Head>
        <title>SUJIN</title>
        <meta name="description" content="SUJIN" />
      </Head>
      {data?.users.map((user: { name: string }) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
};

export default Index;
