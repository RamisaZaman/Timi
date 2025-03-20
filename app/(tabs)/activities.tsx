import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Brain, Coffee, Gamepad as GamepadIcon, Palette, Utensils } from 'lucide-react-native';

const activities = [
  {
    id: 1,
    title: 'Game Night',
    description: 'Board games and card games for the whole family',
    icon: GamepadIcon,
    color: '#ec4899',
  },
  {
    id: 2,
    title: 'Cooking Together',
    description: 'Prepare a meal as a family',
    icon: Utensils,
    color: '#f59e0b',
  },
  {
    id: 3,
    title: 'Art Project',
    description: 'Get creative with crafts and painting',
    icon: Palette,
    color: '#3b82f6',
  },
  {
    id: 4,
    title: 'Coffee Chat',
    description: 'Casual conversation over coffee or tea',
    icon: Coffee,
    color: '#10b981',
  },
];

export default function ActivitiesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activities</Text>
        <Text style={styles.subtitle}>Choose from our curated activities or get AI suggestions</Text>
      </View>

      <Pressable style={styles.aiSuggestion}>
        <Brain size={24} color="#7c3aed" />
        <View style={styles.aiTextContainer}>
          <Text style={styles.aiTitle}>Get Personalized Suggestions</Text>
          <Text style={styles.aiDescription}>Let AI help you plan the perfect activity</Text>
        </View>
      </Pressable>

      <View style={styles.activitiesList}>
        {activities.map((activity) => (
          <Pressable key={activity.id} style={styles.activityCard}>
            <activity.icon size={24} color={activity.color} />
            <Text style={styles.activityTitle}>{activity.title}</Text>
            <Text style={styles.activityDescription}>{activity.description}</Text>
          </Pressable>
        ))}
      </View>
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
  aiSuggestion: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiTextContainer: {
    marginLeft: 12,
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7c3aed',
  },
  aiDescription: {
    fontSize: 14,
    color: '#6b21a8',
  },
  activitiesList: {
    padding: 16,
    gap: 16,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 12,
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: '#64748b',
  },
});