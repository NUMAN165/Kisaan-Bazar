import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';
import { useAuth } from '../../../core/auth/AuthContext';

export const ProfileScreen = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.profile')}</Text>
        <Text style={styles.subtitle}>{t('profileDesc')}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Icon name="account-circle" size={80} color={theme.colors.primary} />
          <Text style={styles.name}>{user?.name || 'User'}</Text>
          <Text style={styles.role}>{user?.role}</Text>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="translate" size={24} color={theme.colors.onSurface} />
          <Text style={styles.menuText}>Language Settings</Text>
          <Icon name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Icon name="logout" size={24} color={theme.colors.error} />
          <Text style={styles.logoutText}>Logout</Text>
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
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  title: {
    ...theme.typography.displayMd,
    color: theme.colors.primary,
  },
  subtitle: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.xs,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  name: {
    ...theme.typography.displayMd,
    color: theme.colors.onSurface,
    marginTop: theme.spacing.sm,
  },
  role: {
    ...theme.typography.labelXl,
    color: theme.colors.secondary,
    marginTop: theme.spacing.xs,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  menuText: {
    ...theme.typography.bodyXl,
    color: theme.colors.onSurface,
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    marginTop: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.error,
    borderRadius: theme.borderRadius.default,
  },
  logoutText: {
    ...theme.typography.labelXl,
    color: theme.colors.error,
    marginLeft: theme.spacing.sm,
  },
});
