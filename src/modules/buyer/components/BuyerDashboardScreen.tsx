import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';
import { useAuth } from '../../../core/auth/AuthContext';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Fresh Organic Tomatoes', farmer: 'Ramesh Farm', price: '₹40/kg', rating: '4.8', icon: 'fruit-watermelon' },
  { id: '2', name: 'Premium Potatoes', farmer: 'Suresh Agrico', price: '₹25/kg', rating: '4.5', icon: 'carrot' },
  { id: '3', name: 'Golden Wheat (A-Grade)', farmer: 'Kisan Connect', price: '₹30/kg', rating: '4.9', icon: 'barley' },
];

export const BuyerDashboardScreen = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const renderProduct = ({ item }: { item: typeof FEATURED_PRODUCTS[0] }) => (
    <View style={styles.productCard}>
      <View style={styles.productImagePlaceholder}>
        <Icon name={item.icon} size={40} color={theme.colors.primary} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.farmerName}>{item.farmer}</Text>
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greetingTitle}>{t('greeting', { name: user?.name || 'Buyer' })}</Text>
          <Text style={styles.greetingSub}>{t('buyerWelcome')}</Text>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="magnify" size={24} color={theme.colors.onSurfaceVariant} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder={t('searchProducts')}
            placeholderTextColor={theme.colors.onSurfaceVariant}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('featuredCategories')}</Text>
          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="fruit-watermelon" size={40} color={theme.colors.primary} />
              <Text style={styles.categoryText}>{t('fruits')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="carrot" size={40} color={theme.colors.secondary} />
              <Text style={styles.categoryText}>{t('vegetables')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Icon name="barley" size={40} color={theme.colors.tertiary} />
              <Text style={styles.categoryText}>{t('grains')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Produce</Text>
          <View style={styles.productsContainer}>
            {FEATURED_PRODUCTS.map(product => renderProduct({ item: product }))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 48,
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.bodyXl,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.md,
    fontWeight: '700',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginHorizontal: theme.spacing.xs,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    ...theme.typography.labelXl,
    color: theme.colors.onSurface,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  productsContainer: {
    gap: theme.spacing.md,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  productImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    ...theme.typography.bodyXl,
    fontWeight: '700',
    color: theme.colors.onSurface,
  },
  farmerName: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
    fontSize: 14,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  productPrice: {
    ...theme.typography.labelXl,
    color: theme.colors.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    ...theme.typography.bodyLg,
    fontSize: 14,
    color: theme.colors.onSurfaceVariant,
    marginLeft: 4,
  },
});
