import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../auth/AuthContext';
import { FarmerDashboard } from '../../modules/farmer/components/FarmerDashboard';
import { MyCropsScreen } from '../../modules/farmer/components/MyCropsScreen';
import { ChatScreen } from '../../modules/chat/components/ChatScreen';
import { ProfileScreen } from '../../modules/profile/components/ProfileScreen';
import { BuyerDashboardScreen } from '../../modules/buyer/components/BuyerDashboardScreen';
import { OrdersScreen } from '../../modules/buyer/components/OrdersScreen';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'help-circle-outline';

          if (route.name === 'Home' || route.name === 'Buyer Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'My Crops') {
            iconName = focused ? 'sprout' : 'sprout-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'message-text' : 'message-text-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
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
            component={MyCropsScreen}
            options={{ tabBarLabel: t('tabs.myCrops') }}
          />
          <Tab.Screen 
            name="Chat"
            component={ChatScreen}
            options={{ tabBarLabel: t('tabs.chat') }}
          />
          <Tab.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarLabel: t('tabs.profile') }}
          />
        </>
      ) : (
        <>
          <Tab.Screen 
            name="Buyer Home" 
            component={BuyerDashboardScreen}
            options={{ tabBarLabel: t('tabs.buyerHome') }}
          />
          <Tab.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={{ tabBarLabel: t('tabs.orders') }}
          />
          <Tab.Screen 
            name="Chat"
            component={ChatScreen}
            options={{ tabBarLabel: t('tabs.chat') }}
          />
          <Tab.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarLabel: t('tabs.profile') }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};
