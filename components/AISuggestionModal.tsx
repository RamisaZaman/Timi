import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, ActivityIndicator, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Send, X } from 'lucide-react-native';
import { useAIStore } from '@/stores/aiStore';

interface AISuggestionModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AISuggestionModal({ visible, onClose }: AISuggestionModalProps) {
  const { loading, error, suggestion, generateSuggestion } = useAIStore();
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      generateSuggestion(input.trim());
      setInput('');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Activity Suggestions</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#64748b" />
          </Pressable>
        </View>

        <ScrollView 
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}>
          <View style={styles.welcomeMessage}>
            <Text style={styles.welcomeTitle}>Hello! 👋</Text>
            <Text style={styles.welcomeText}>
              I can help you find the perfect activity for quality time with your loved ones.
              Try asking me about:
            </Text>
            <View style={styles.suggestionsList}>
              <Text style={styles.suggestionItem}>• Activities for a rainy day</Text>
              <Text style={styles.suggestionItem}>• Fun games for 4 people</Text>
              <Text style={styles.suggestionItem}>• Budget-friendly family activities</Text>
              <Text style={styles.suggestionItem}>• Indoor bonding activities</Text>
            </View>
          </View>

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#7c3aed" />
              <Text style={styles.loadingText}>Thinking of something fun...</Text>
            </View>
          )}

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {suggestion && (
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask for activity suggestions..."
            value={input}
            onChangeText={setInput}
            multiline
            maxLength={200}
            onSubmitEditing={handleSubmit}
          />
          <Pressable 
            style={[styles.sendButton, !input.trim() && styles.sendButtonDisabled]}
            onPress={handleSubmit}
            disabled={!input.trim()}>
            <Send 
              size={20} 
              color={input.trim() ? '#ffffff' : '#94a3b8'} 
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
  },
  closeButton: {
    padding: 8,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
    gap: 16,
  },
  welcomeMessage: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 12,
  },
  suggestionsList: {
    gap: 8,
  },
  suggestionItem: {
    fontSize: 15,
    color: '#1e293b',
  },
  loadingContainer: {
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#64748b',
  },
  errorContainer: {
    backgroundColor: '#fef2f2',
    padding: 16,
    borderRadius: 12,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 16,
  },
  suggestionContainer: {
    backgroundColor: '#7c3aed',
    padding: 16,
    borderRadius: 12,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  suggestionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7c3aed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#e2e8f0',
  },
});