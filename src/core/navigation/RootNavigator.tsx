import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../auth/AuthContext';
import { MainTabNavigator } from './MainTabNavigator';
import { LoginScreen } from '../../modules/auth/components/LoginScreen';
import { RegisterScreen } from '../../modules/auth/components/RegisterScreen';
import { RoleSelectionScreen } from '../../modules/auth/components/RoleSelectionScreen';
import { theme } from '../theme';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export const RootNavigator = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Case 1: Not logged in
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : !user.role ? (
          // Case 2: Logged in (registered) but no role chosen yet
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        ) : (
          // Case 3: Fully authenticated with a role
          <Stack.Screen name="Main" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
