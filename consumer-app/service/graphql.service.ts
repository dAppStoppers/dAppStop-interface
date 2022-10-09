import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const APIURL =
  "https://api.thegraph.com/subgraphs/name/2manslkh/dappstop-mumbai";

const tokensQuery = `
  query {
    dapps {
      id
      creator
      popURI
      ceramicURI
    }
  }  
`;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

async function getDapps() {
  try {
    const data = await client.query({
      query: gql(tokensQuery),
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getDapps };
