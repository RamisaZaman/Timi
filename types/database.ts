import { Timestamp, DocumentSnapshot } from 'firebase/firestore';

export interface UserPreferences {
  interests: string[];
  budget: string;
  activityPreferences: string[];
}

export interface User {
  name: string;
  email: string;
  phone: string;
  profilePic: string;
  preferences: UserPreferences;
}

export interface Event {
  title: string;
  date: Timestamp;
  time: Timestamp;
  location: string;
  checklist: string[];
  attendees: string[]; // Array of userIds
  organizerId: string; // userId
  status: 'upcoming' | 'completed';
}

export interface Activity {
  eventId: string; // References completed events
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface UserContacts {
  contacts: Contact[];
}

// Database collection names
export const COLLECTIONS = {
  USERS: 'users',
  EVENTS: 'events',
  ACTIVITIES: 'activities',
  CONTACTS: 'contacts',
} as const;

// Type for document IDs
export type DocumentId = string;

// Type for collection paths
export type CollectionPath = typeof COLLECTIONS[keyof typeof COLLECTIONS];

// Pagination types
export interface PaginationOptions {
  limit: number;
  lastVisibleDoc?: DocumentSnapshot;
}

export interface PaginatedResponse<T> {
  data: T[];
  lastVisibleDoc: DocumentSnapshot | null;
}

// Error types
export class DatabaseError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'DatabaseError';
  }
}

// Batch operation types
export interface UserWithContacts {
  user: User;
  contacts: UserContacts;
} 