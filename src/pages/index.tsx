import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/firebase';

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

const Test = styled.button`
  display: flex;
  color: red;
  border: 1px solid black;
`;

const Index: NextPage = () => {
  const { data, error } = useQuery(['users'], () =>
    fetcher('{ users { name } }')
  );

  const handleClick = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div>
      <Head>
        <title>SUJIN</title>
        <meta name="description" content="SUJIN" />
      </Head>
      <Test onClick={handleClick}>Hello</Test>
      {data?.users.map((user: { name: string }) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
};

export default Index;
