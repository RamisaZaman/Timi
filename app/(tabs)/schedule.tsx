import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Plus } from 'lucide-react-native';
import { format } from 'date-fns';

const schedules = [
  {
    id: 1,
    title: 'Family Game Night',
    date: new Date(2024, 2, 15, 19, 0),
    participants: ['Mom', 'Dad', 'Sarah'],
    activity: 'Board Games',
  },
  {
    id: 2,
    title: 'Sunday Brunch',
    date: new Date(2024, 2, 17, 11, 0),
    participants: ['Grandma', 'Aunt Jane', 'Uncle Bob'],
    activity: 'Cooking Together',
  },
];

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Schedule</Text>
        <Pressable style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
          <Text style={styles.addButtonText}>New Plan</Text>
        </Pressable>
      </View>

      <View style={styles.scheduleList}>
        {schedules.map((schedule) => (
          <View key={schedule.id} style={styles.scheduleCard}>
            <Text style={styles.scheduleTitle}>{schedule.title}</Text>
            <Text style={styles.scheduleDate}>
              {format(schedule.date, 'EEEE, MMMM d, yyyy')}
            </Text>
            <Text style={styles.scheduleTime}>
              {format(schedule.date, 'h:mm a')}
            </Text>
            <Text style={styles.scheduleActivity}>
              Activity: {schedule.activity}
            </Text>
            <View style={styles.participantsContainer}>
              <Text style={styles.participantsLabel}>Participants:</Text>
              <Text style={styles.participants}>
                {schedule.participants.join(', ')}
              </Text>
            </View>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e293b',
  },
  addButton: {
    backgroundColor: '#7c3aed',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffff',
    marginLeft: 8,
    fontWeight: '600',
  },
  scheduleList: {
    padding: 16,
    gap: 16,
  },
  scheduleCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  scheduleDate: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 4,
  },
  scheduleTime: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
  },
  scheduleActivity: {
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 8,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantsLabel: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
    marginRight: 8,
  },
  participants: {
    fontSize: 16,
    color: '#64748b',
  },
});