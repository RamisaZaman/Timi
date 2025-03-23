import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  writeBatch,
  Timestamp,
  DocumentSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';
import {
  User,
  Event,
  Activity,
  UserContacts,
  COLLECTIONS,
  DocumentId,
  PaginationOptions,
  PaginatedResponse,
  DatabaseError,
  UserWithContacts,
} from '../../types/database';

// Error handling wrapper
async function handleDatabaseOperation<T>(
  operation: () => Promise<T>,
  errorMessage: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    console.error(errorMessage, error);
    throw new DatabaseError(errorMessage, (error as Error).message);
  }
}

// User operations
export async function createUser(userId: DocumentId, userData: User): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      await setDoc(doc(db, COLLECTIONS.USERS, userId), userData);
    },
    'Error creating user'
  );
}

export async function getUser(userId: DocumentId): Promise<User | null> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.USERS, userId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return null;

      const data = docSnap.data();
      return {
        name: data.name,
        email: data.email,
        phone: data.phone,
        profilePic: data.profilePic,
        preferences: data.preferences,
      } as User;
    },
    'Error fetching user'
  );
}

export async function updateUser(userId: DocumentId, userData: Partial<User>): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.USERS, userId);
      await updateDoc(docRef, userData);
    },
    'Error updating user'
  );
}

// Batch operations
export async function createUserWithContacts(
  userId: DocumentId,
  { user, contacts }: UserWithContacts
): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      const batch = writeBatch(db);
      const userRef = doc(db, COLLECTIONS.USERS, userId);
      const contactsRef = doc(db, COLLECTIONS.CONTACTS, userId);

      batch.set(userRef, user);
      batch.set(contactsRef, contacts);

      await batch.commit();
    },
    'Error creating user with contacts'
  );
}

// Event operations
export async function createEvent(eventId: DocumentId, eventData: Event): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      await setDoc(doc(db, COLLECTIONS.EVENTS, eventId), eventData);
    },
    'Error creating event'
  );
}

export async function getEvent(eventId: DocumentId): Promise<Event | null> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.EVENTS, eventId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return null;

      const data = docSnap.data();
      return {
        title: data.title,
        date: data.date,
        time: data.time,
        location: data.location,
        checklist: data.checklist,
        attendees: data.attendees,
        organizerId: data.organizerId,
        status: data.status,
        id: docSnap.id,
      } as Event;
    },
    'Error fetching event'
  );
}

export async function updateEvent(eventId: DocumentId, eventData: Partial<Event>): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.EVENTS, eventId);
      await updateDoc(docRef, eventData);
    },
    'Error updating event'
  );
}

// Paginated event queries
export async function getPaginatedEvents(
  organizerId: DocumentId,
  { limit: pageLimit, lastVisibleDoc }: PaginationOptions
): Promise<PaginatedResponse<Event>> {
  return handleDatabaseOperation(
    async () => {
      let q = query(
        collection(db, COLLECTIONS.EVENTS),
        where('organizerId', '==', organizerId),
        orderBy('date'),
        limit(pageLimit)
      );

      if (lastVisibleDoc) {
        q = query(q, startAfter(lastVisibleDoc));
      }

      const querySnapshot = await getDocs(q);
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1] || null;

      return {
        data: querySnapshot.docs.map(doc => ({
          title: doc.data().title,
          date: doc.data().date,
          time: doc.data().time,
          location: doc.data().location,
          checklist: doc.data().checklist,
          attendees: doc.data().attendees,
          organizerId: doc.data().organizerId,
          status: doc.data().status,
          id: doc.id,
        })) as Event[],
        lastVisibleDoc: lastVisible,
      };
    },
    'Error fetching paginated events'
  );
}

// Activity operations
export async function createActivity(userId: DocumentId, activityData: Activity): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      await setDoc(doc(db, COLLECTIONS.ACTIVITIES, userId), activityData);
    },
    'Error creating activity'
  );
}

export async function getUserActivities(userId: DocumentId): Promise<Activity | null> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.ACTIVITIES, userId);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? (docSnap.data() as Activity) : null;
    },
    'Error fetching user activities'
  );
}

// Contacts operations
export async function createUserContacts(userId: DocumentId, contactsData: UserContacts): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      await setDoc(doc(db, COLLECTIONS.CONTACTS, userId), contactsData);
    },
    'Error creating user contacts'
  );
}

export async function getUserContacts(userId: DocumentId): Promise<UserContacts | null> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.CONTACTS, userId);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? (docSnap.data() as UserContacts) : null;
    },
    'Error fetching user contacts'
  );
}

export async function updateUserContacts(
  userId: DocumentId,
  contactsData: Partial<UserContacts>
): Promise<void> {
  return handleDatabaseOperation(
    async () => {
      const docRef = doc(db, COLLECTIONS.CONTACTS, userId);
      await updateDoc(docRef, contactsData);
    },
    'Error updating user contacts'
  );
}

// Utility functions
export function timestampToDate(timestamp: Timestamp): Date {
  return timestamp.toDate();
}

export function dateToTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
} 