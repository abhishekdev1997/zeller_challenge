import { gql } from "@apollo/client";

export const ZELLER_LIST_CUSTOMER_QUERY = gql`
query Items {
    listZellerCustomers {
      items {
        id,
        name,
        email,
        role
      }
    }
  }`