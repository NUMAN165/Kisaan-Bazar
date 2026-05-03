import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../auth/AuthContext';
import { FarmerDashboard } from '../../modules/farmer/components/FarmerDashboard';
import { View, Text } from 'react-native';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

// Placeholder screens for other tabs
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
    <Text style={{ ...theme.typography.displayMd, color: theme.colors.primary }}>{name}</Text>
  </View>
);

export const MainTabNavigator = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.outlineVariant,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.fontFamily,
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      {user?.role === 'FARMER' ? (
        <>
          <Tab.Screen 
            name="Home" 
            component={FarmerDashboard} 
            options={{ tabBarLabel: t('tabs.home') }} 
          />
          <Tab.Screen 
            name="My Crops"
            options={{ tabBarLabel: t('tabs.myCrops') }}
          >
            {() => <PlaceholderScreen name={t('tabs.myCrops')} />}
          </Tab.Screen>
          <Tab.Screen 
            name="Chat"
            options={{ tabBarLabel: t('tabs.chat') }}
          >
            {() => <PlaceholderScreen name={t('tabs.chat')} />}
          </Tab.Screen>
          <Tab.Screen 
            name="Profile"
            options={{ tabBarLabel: t('tabs.profile') }}
          >
            {() => <PlaceholderScreen name={t('tabs.profile')} />}
          </Tab.Screen>
        </>
      ) : (
        <>
          {/* Buyer Tabs could go here */}
          <Tab.Screen name="Buyer Home">
            {() => <PlaceholderScreen name="Buyer Home" />}
          </Tab.Screen>
          <Tab.Screen name="Orders">
            {() => <PlaceholderScreen name="Orders" />}
          </Tab.Screen>
        </>
      )}
    </Tab.Navigator>
  );
};
