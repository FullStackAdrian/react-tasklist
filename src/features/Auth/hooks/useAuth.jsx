import { useEffect, useState } from 'react';
const useAuth = () => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    // logic to check if user is authenticated
    // and set the auth state accordingly
  }, []);
  return auth;
};
export default useAuth;
  