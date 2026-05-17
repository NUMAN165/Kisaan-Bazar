import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';

const DUMMY_CROPS = [
  { id: '1', name: 'Organic Tomatoes', quantity: '500 kg', price: '₹40/kg', status: 'Available' },
  { id: '2', name: 'Fresh Potatoes', quantity: '1200 kg', price: '₹25/kg', status: 'Available' },
  { id: '3', name: 'Golden Wheat', quantity: '2000 kg', price: '₹30/kg', status: 'Harvesting Soon' },
];

export const MyCropsScreen = () => {
  const { t } = useTranslation();

  const renderCropItem = ({ item }: { item: typeof DUMMY_CROPS[0] }) => (
    <View style={styles.cropCard}>
      <View style={styles.cropInfo}>
        <Text style={styles.cropName}>{item.name}</Text>
        <Text style={styles.cropDetails}>{item.quantity} • {item.price}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Icon name="pencil-outline" size={20} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.myCrops')}</Text>
        <Text style={styles.subtitle}>{t('manageCrops')}</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={24} color={theme.colors.onPrimary} />
          <Text style={styles.addButtonText}>{t('addNewProduct')}</Text>
        </TouchableOpacity>
        
        <FlatList
          data={DUMMY_CROPS}
          keyExtractor={item => item.id}
          renderItem={renderCropItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
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
    padding: theme.spacing.md,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    marginBottom: theme.spacing.lg,
  },
  addButtonText: {
    ...theme.typography.labelXl,
    color: theme.colors.onPrimary,
    marginLeft: theme.spacing.xs,
  },
  listContainer: {
    paddingBottom: theme.spacing.xl,
  },
  cropCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    ...theme.typography.bodyXl,
    fontWeight: '700',
    color: theme.colors.onSurface,
  },
  cropDetails: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.xs,
  },
  statusBadge: {
    backgroundColor: theme.colors.primaryContainer,
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
    marginTop: theme.spacing.sm,
  },
  statusText: {
    ...theme.typography.labelXl,
    fontSize: 12,
    color: theme.colors.onPrimaryContainer,
  },
  editButton: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.full,
  },
});
