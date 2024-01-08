import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, 
    {
      fetchPolicy: 'cache-and-network'
    }
  );
  
  if (loading) {
    return { loading: true, repositories: null, error: null };
  }

  if (error) {
    return {loading: false, repositories: null, error };
  }
  const repositories = data.repositories;
  return { loading: false, repositories, error: null };
};

export default useRepositories;