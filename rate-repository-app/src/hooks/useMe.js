import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
  const { data, error, loading } = useQuery(ME, 
    {
      fetchPolicy: 'cache-and-network'
    }
  );
  
  if (loading) {
    return { loading: true, error: null };
  }

  if (error) {
    return {loading: false, error };
  }

  const currentUser = data.me;
  console.log('current user', currentUser)
  
  return { loading: false, currentUser, error: null };
};

export default useMe;

