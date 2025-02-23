import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tabRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}