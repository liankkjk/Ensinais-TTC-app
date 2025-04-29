import LoginNav from './tabRoutes'; 
import { AuthProvider } from './authcontext'; 

export default function Routes() {
  return (
    <AuthProvider> 
      <LoginNav />
    </AuthProvider>
  );
}
