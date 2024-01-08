import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getAllRepositories {
    repositories {
      edges {
        node {
          id,
          ownerAvatarUrl,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
        }
      },
    }
  }
`;

export const ME = gql`
  query getCurrentUser {
    me {
      id
      username
    }
  }
`
