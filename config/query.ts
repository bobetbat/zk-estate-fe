import { gql } from '@apollo/client';

export const GET_LATEST_20_PROPERTY_LISTINGS = gql`
  query GetLatest20PropertyListings($first: Int, $orderDirection: String) {
    propertyListingCreateds(first: $first, orderDirection: $orderDirection) {
      id
      propertyId
      landlord
      tokenURI
    }
  }
`;

export const GET_PROPERTY_LISTINGS_BY_LANDLORD = gql`
  query GetPropertyListingsByLandlord($landlord: Bytes!) {
    PropertyListingCreateds(where: { landlord: $landlord }) {
      id
      tokenURI
    }
  }
`;

export const GET_TENANT_PROPOSALS_BY_PROPERTY_ID = gql`
  query GetTenantProposalsByPropertyId($propertyId: BigInt!) {
    tenantProposalSubmitteds(where: { propertyId: $propertyId }) {
      id
      propertyId
      tenant
      proposalId
    }
  }
`;

export const GET_TENANT_PROPOSALS_BY_TENANT = gql`
  query GetTenantProposalsByTenant($tenant: Bytes!) {
    tenantProposalSubmitteds(where: { tenant: $tenant }) {
      id
      propertyId
      tenant
      proposalId
    }
  }
`;
