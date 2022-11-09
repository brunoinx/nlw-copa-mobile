import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error('AuthContext is not missing...');

  return context;
}
