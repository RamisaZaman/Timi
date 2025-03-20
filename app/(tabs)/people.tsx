import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Plus, UserPlus } from 'lucide-react-native';

const people = [
  {
    id: 1,
    name: 'Mom',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&fit=crop',
    relationship: 'Family',
  },
  {
    id: 2,
    name: 'Dad',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100&fit=crop',
    relationship: 'Family',
  },
  {
    id: 3,
    name: 'Sarah',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop',
    relationship: 'Sister',
  },
];

export default function PeopleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>People</Text>
        <Pressable style={styles.addButton}>
          <UserPlus size={24} color="#ffffff" />
          <Text style={styles.addButtonText}>Add Person</Text>
        </Pressable>
      </View>

      <View style={styles.peopleList}>
        {people.map((person) => (
          <Pressable key={person.id} style={styles.personCard}>
            <Image
              source={{ uri: person.photo }}
              style={styles.personPhoto}
            />
            <View style={styles.personInfo}>
              <Text style={styles.personName}>{person.name}</Text>
              <Text style={styles.personRelationship}>{person.relationship}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.importContainer}>
        <Plus size={24} color="#7c3aed" />
        <View style={styles.importText}>
          <Text style={styles.importTitle}>Import Contacts</Text>
          <Text style={styles.importDescription}>
            Quickly add people from your contacts
          </Text>
        </View>
      </Pressable>
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
  peopleList: {
    padding: 16,
    gap: 12,
  },
  personCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  personPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  personInfo: {
    marginLeft: 12,
  },
  personName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  personRelationship: {
    fontSize: 14,
    color: '#64748b',
  },
  importContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  importText: {
    marginLeft: 12,
  },
  importTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7c3aed',
  },
  importDescription: {
    fontSize: 14,
    color: '#6b21a8',
  },
});