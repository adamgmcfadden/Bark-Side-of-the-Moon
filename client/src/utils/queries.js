// queries code here
export const QUERY_CHECKOUT = gql`
  query getCheckout($animals: [ID]!) {
    checkout(animals: $animals) {
      session
    }
  }
`;