import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../core/theme';
import { useAuth } from '../../../core/auth/AuthContext';

export const FarmerDashboard = () => {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Language Switcher */}
        <View style={styles.langSwitcher}>
          <TouchableOpacity onPress={() => changeLanguage('en')} style={[styles.langBtn, i18n.language === 'en' && styles.langBtnActive]}>
            <Text style={[styles.langText, i18n.language === 'en' && styles.langTextActive]}>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('hi')} style={[styles.langBtn, i18n.language === 'hi' && styles.langBtnActive]}>
            <Text style={[styles.langText, i18n.language === 'hi' && styles.langTextActive]}>HI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('mr')} style={[styles.langBtn, i18n.language === 'mr' && styles.langBtnActive]}>
            <Text style={[styles.langText, i18n.language === 'mr' && styles.langTextActive]}>MR</Text>
          </TouchableOpacity>
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greetingTitle}>{t('greeting', { name: user?.name || 'Farmer' })}</Text>
          <Text style={styles.greetingSub}>{t('farmStatus')}</Text>
        </View>

        {/* Alert/News Card */}
        <View style={styles.alertCard}>
          <Text style={styles.alertText}>{t('priceAlert')}</Text>
        </View>

        {/* Recent Orders Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('recentOrdersTitle')}</Text>
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>{t('noRecentOrders')}</Text>
          </View>
        </View>

        {/* Action Buttons Example */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>{t('addNewProduct')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  langSwitcher: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing.sm,
    gap: theme.spacing.xs,
  },
  langBtn: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  langBtnActive: {
    backgroundColor: theme.colors.primaryContainer,
    borderColor: theme.colors.primary,
  },
  langText: {
    ...theme.typography.labelXl,
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
  },
  langTextActive: {
    color: theme.colors.onPrimaryContainer,
  },
  header: {
    marginBottom: theme.spacing.lg,
    marginTop: theme.spacing.sm,
  },
  greetingTitle: {
    ...theme.typography.displayMd,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  greetingSub: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
  },
  alertCard: {
    backgroundColor: theme.colors.secondaryContainer,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.default,
    marginBottom: theme.spacing.lg,
    // Soft shadow for depth
    shadowColor: theme.colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  alertText: {
    ...theme.typography.bodyXl,
    color: theme.colors.onSecondaryContainer,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.bodyXl,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.sm,
    fontWeight: '700',
  },
  emptyState: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderStyle: 'dashed',
  },
  emptyStateText: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: theme.spacing.touchTargetMin,
  },
  primaryButtonText: {
    ...theme.typography.labelXl,
    color: theme.colors.onPrimary,
  },
});
