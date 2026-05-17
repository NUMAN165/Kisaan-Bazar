import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';

const DUMMY_ORDERS = [
  { id: '101', item: 'Organic Tomatoes', quantity: '50 kg', total: '₹2000', status: 'Delivered', date: 'May 12, 2026' },
  { id: '102', item: 'Fresh Potatoes', quantity: '100 kg', total: '₹2500', status: 'In Transit', date: 'May 15, 2026' },
  { id: '103', item: 'Golden Wheat', quantity: '500 kg', total: '₹15000', status: 'Pending', date: 'May 16, 2026' },
];

export const OrdersScreen = () => {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return theme.colors.tertiary; // Green
      case 'In Transit': return theme.colors.secondaryContainer; // Orange
      default: return theme.colors.outlineVariant; // Gray
    }
  };

  const renderOrderItem = ({ item }: { item: typeof DUMMY_ORDERS[0] }) => (
    <TouchableOpacity style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Order #{item.id}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      <View style={styles.orderDetails}>
        <Icon name="package-variant-closed" size={24} color={theme.colors.primary} style={styles.orderIcon} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.item}</Text>
          <Text style={styles.itemQuantity}>{item.quantity} • {item.total}</Text>
        </View>
      </View>
      <View style={styles.orderFooter}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={[styles.statusText, { color: item.status === 'In Transit' ? theme.colors.onSecondaryContainer : theme.colors.onPrimary }]}>
            {item.status}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.actionText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.orders')}</Text>
        <Text style={styles.subtitle}>{t('buyerOrdersDesc')}</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DUMMY_ORDERS}
          keyExtractor={item => item.id}
          renderItem={renderOrderItem}
          contentContainerStyle={styles.listContainer}
        />
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
  },
  listContainer: {
    padding: theme.spacing.md,
  },
  orderCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
    paddingBottom: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  orderId: {
    ...theme.typography.labelXl,
    color: theme.colors.onSurface,
  },
  orderDate: {
    ...theme.typography.bodyLg,
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  orderIcon: {
    marginRight: theme.spacing.md,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    ...theme.typography.bodyXl,
    fontWeight: '700',
    color: theme.colors.onSurface,
  },
  itemQuantity: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.full,
  },
  statusText: {
    ...theme.typography.labelXl,
    fontSize: 12,
    fontWeight: '700',
  },
  actionText: {
    ...theme.typography.labelXl,
    color: theme.colors.primary,
  },
});
