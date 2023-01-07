// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createYoga, createSchema } from 'graphql-yoga';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export const config = {
//   api: {
//     // Disable body parsing (required for file uploads)
//     bodyParser: false,
//   },
// };

// const schema = createSchema({
//   typeDefs: /* GraphQL */ `
//     type Query {
//       greetings: String
//     }
//   `,
//   resolvers: {
//     Query: {
//       greetings: () => 'This is the `greetings` field of the root `Query` type',
//     },
//   },
// });

// export default createYoga<{
//   req: NextApiRequest;
//   res: NextApiResponse;
// }>({
//   schema,
//   // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
//   graphqlEndpoint: '/api/graphql',
// });

import { createYoga, createSchema } from 'graphql-yoga';

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

const resolvers = {
  Query: {
    users() {
      return [{ name: 'Nextjs' }];
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
});
