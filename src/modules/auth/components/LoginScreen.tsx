import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../core/theme';
import { useAuth } from '../../../core/auth/AuthContext';

export const LoginScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login - default to Farmer role for now if credentials exist
    login('Ramesh', 'FARMER');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Image 
              source={require('../../../assets/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.welcomeText}>{t('welcome')}</Text>
            <Text style={styles.title}>{t('login')}</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>{t('emailPhone')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('emailPhone')}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>{t('password')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('password')}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>{t('login')}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.linkButton} 
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.linkText}>{t('noAccount')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  welcomeText: {
    ...theme.typography.bodyLg,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  title: {
    ...theme.typography.displayLg,
    color: theme.colors.primary,
  },
  form: {
    width: '100%',
  },
  label: {
    ...theme.typography.labelXl,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.borderRadius.default,
    padding: theme.spacing.md,
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    minHeight: theme.spacing.touchTargetMin,
    justifyContent: 'center',
  },
  buttonText: {
    ...theme.typography.labelXl,
    color: theme.colors.onPrimary,
  },
  linkButton: {
    marginTop: theme.spacing.lg,
    alignItems: 'center',
  },
  linkText: {
    ...theme.typography.bodyLg,
    color: theme.colors.primary,
    fontWeight: '600',
  },
});
