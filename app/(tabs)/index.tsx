import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useAIStore } from '@/stores/aiStore';
import { Brain, Calendar, Heart } from 'lucide-react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import AISuggestionModal from '@/components/AISuggestionModal';

export default function HomeScreen() {
  const { generateSuggestion } = useAIStore();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAISuggestion = () => {
    generateSuggestion();
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quality Time</Text>
        <Text style={styles.subtitle}>Plan meaningful moments together</Text>
      </View>

      <View style={styles.quickActions}>
        <Pressable 
          style={styles.actionCard}
          onPress={handleAISuggestion}>
          <Brain size={24} color="#7c3aed" />
          <Text style={styles.actionText}>Get AI Suggestions</Text>
        </Pressable>

        <Link href="/activities" asChild>
          <Pressable style={styles.actionCard}>
            <Calendar size={24} color="#7c3aed" />
            <Text style={styles.actionText}>Browse Activities</Text>
          </Pressable>
        </Link>

        <Link href="/people" asChild>
          <Pressable style={styles.actionCard}>
            <Heart size={24} color="#7c3aed" />
            <Text style={styles.actionText}>Add Loved Ones</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.upcomingSection}>
        <Text style={styles.sectionTitle}>Upcoming Plans</Text>
        <View style={styles.upcomingCard}>
          <Text style={styles.upcomingTitle}>Family Game Night</Text>
          <Text style={styles.upcomingDetails}>Tomorrow at 7:00 PM</Text>
          <Text style={styles.upcomingParticipants}>With: Mom, Dad, Sarah</Text>
        </View>
      </View>

      <AISuggestionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  quickActions: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    aspectRatio: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#1e293b',
    textAlign: 'center',
  },
  upcomingSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  upcomingCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  upcomingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  upcomingDetails: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  upcomingParticipants: {
    fontSize: 14,
    color: '#64748b',
  },
});