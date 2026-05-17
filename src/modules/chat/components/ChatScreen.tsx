import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../core/theme';

const DUMMY_CHATS = [
  { id: '1', name: 'Ramesh (Buyer)', lastMessage: 'Are the tomatoes ready for pickup?', time: '10:30 AM', unread: 2 },
  { id: '2', name: 'FreshMart Ltd.', lastMessage: 'We would like to place a bulk order for potatoes.', time: 'Yesterday', unread: 0 },
  { id: '3', name: 'Logistics Partner', lastMessage: 'Your truck will arrive by 4 PM.', time: 'Monday', unread: 0 },
];

export const ChatScreen = () => {
  const { t } = useTranslation();

  const renderChatItem = ({ item }: { item: typeof DUMMY_CHATS[0] }) => (
    <TouchableOpacity style={styles.chatCard}>
      <View style={styles.avatar}>
        <Icon name="account" size={32} color={theme.colors.onPrimaryContainer} />
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
      </View>
      {item.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.chat')}</Text>
        <Text style={styles.subtitle}>{t('chatDesc')}</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DUMMY_CHATS}
          keyExtractor={item => item.id}
          renderItem={renderChatItem}
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
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    ...theme.typography.bodyXl,
    fontWeight: '700',
    color: theme.colors.onSurface,
  },
  chatTime: {
    ...theme.typography.bodyLg,
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
  lastMessage: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  unreadBadge: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
    paddingHorizontal: 6,
  },
  unreadText: {
    color: theme.colors.onPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
});
