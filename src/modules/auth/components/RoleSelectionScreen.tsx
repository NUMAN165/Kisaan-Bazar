import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';
import { useAuth } from '../../../core/auth/AuthContext';

export const RoleSelectionScreen = () => {
  const { t } = useTranslation();
  const { setRole } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('chooseRole')}</Text>
        
        <TouchableOpacity 
          style={styles.roleCard} 
          onPress={() => setRole('FARMER')}
        >
          <View style={styles.iconCircle}>
            <Icon name="tractor" size={32} color={theme.colors.onPrimaryContainer} />
          </View>
          <Text style={styles.roleName}>{t('iAmFarmer')}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.roleCard} 
          onPress={() => setRole('BUYER')}
        >
          <View style={styles.iconCircle}>
            <Icon name="cart" size={32} color={theme.colors.onPrimaryContainer} />
          </View>
          <Text style={styles.roleName}>{t('iAmBuyer')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.displayLg,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  roleCard: {
    backgroundColor: theme.colors.surface,
    width: '100%',
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  iconText: {
    fontSize: 30,
  },
  roleName: {
    ...theme.typography.bodyXl,
    color: theme.colors.primary,
    fontWeight: '700',
  },
});
