## Timi App - Minimal Requirements and Features Documentation

### Key Features

1. **User Authentication**
   - **Phone/Email Login**: Users can create an account and log in using their phone number or email address via Firebase Authentication.
   - **Profile Management**: Users can update their profile information, including name, profile picture, and preferences.

2. **People Management**
   - **People List**: Users can view a list of people who have Timi accounts.
   - **Add People to Events**: Users can add people from the app's list to events. Only users with Timi accounts can be added.

3. **Event Creation**
   - **Event Details**: Users can create events with the following details:
     - Title
     - Description
     - Date and Time
     - Location (manual input or map selection)
     - Budget Range
     - Activity Preferences (e.g., movies, dining, outdoor activities)
   - **Event Privacy**: Option to make events private (invite-only) or public (open to all users).
   - **Event Categories**: Users can categorize events (e.g., birthday, hangout, date night).
   - **Group Chat Creation**: Automatically create a group chat with selected participants when an event is created. The event details will appear at the top of the chat.
   - **Event Access**: All people listed in the event will have access to the chat, and the event chat will appear on their home screen.

4. **AI-Powered Suggestions**
   - **Activity Recommendations**: AI suggests activities based on:
     - User preferences
     - Budget
     - Location
     - Weather conditions
     - Group size
   - **Dynamic Updates**: Suggestions update in real-time as users modify event details.
   - **Popular Choices**: Display trending or popular activities in the user’s area.

5. **Real-Time Notifications**
   - **Event Updates**: Notify users when an event is created, updated, or canceled.
   - **RSVP Alerts**: Notify event organizers when guests RSVP.
   - **Reminders**: Send reminders for upcoming events (e.g., 1 day before, 1 hour before).

6. **Group Chat**
   - **In-App Chat**: A simple chat feature for event groups.
   - **Media Sharing**: Users can share photos, videos, and links in the chat.
   - **Chat Notifications**: Notify users of new messages in the group chat.
   - **Event Chat Management**: Once the event is over, the group chat will no longer appear on the home screen but will remain accessible in the activity page. Users can reopen previous event chats and add new events to the same group.

7. **RSVP System**
   - **RSVP Options**: Guests can RSVP with options like Yes, No, or Maybe.
   - **Guest List Management**: Organizers can view and manage the guest list.
   - **Capacity Limits**: Set a maximum number of attendees for events.

8. **Reminders**
   - **Custom Reminders**: Users can set custom reminders for events.
   - **Automatic Reminders**: The app sends automatic reminders based on event timing.

### Technical Specifications

1. **Technology Stack**
   - **Frontend**: React Native (Expo)
   - **Backend**: Firebase
   - **Database**: Firestore
   - **AI/ML**: Integrate an AI service (e.g., OpenAI, TensorFlow) for activity recommendations.
   - **Maps**: Google Maps API/Apple Maps API
   - **Push Notifications**: Firebase Cloud Messaging (FCM)

2. **Platforms**
   - iOS
   - Android

3. **Third-Party Integrations**
   - Payment Gateways (for premium features or bookings)
   - Calendar APIs (Google Calendar, Apple Calendar)
   - Activity Booking APIs (e.g., OpenTable, Ticketmaster)

### User Flow

1. **Onboarding**:
   - New users sign up using their phone number or email.
   - Set preferences (interests, location, budget).

2. **Event Creation**:
   - User creates an event with details (title, date, location, etc.).
   - User adds people from the app's list to the event.
   - AI suggests activities based on input.
   - A group chat is automatically created with selected participants, and the event details appear at the top of the chat.
   - The event chat appears on the home screen of all participants.

3. **Invitations**:
   - User invites friends/family to the event via phone number or email.
   - Invitees RSVP via the app.

4. **Event Management**:
   - Organizers manage guest list, chat, and reminders.
   - AI updates suggestions as event details change.

5. **Post-Event**:
   - The group chat moves to the activity page after the event ends.
   - Users can reopen previous event chats and add new events to the same group.

### Future Enhancements

- **AI-Powered Itinerary Planning**: Automatically generate full itineraries for multi-day events.
- **Group Polls**: Allow group members to vote on activity options.
- **Premium Features**: Offer premium features like advanced analytics, custom themes, or ad-free experience.
- **Integration with Smart Devices**: Sync with smart home devices for reminders or event updates.

### Non-Functional Requirements

- **Performance**: The app should load in under 3 seconds and handle up to 10,000 concurrent users.
- **Security**: Ensure secure authentication and data encryption.
- **Scalability**: The backend should scale to support growing user numbers.
- **Usability**: The app should have an intuitive UI/UX with a learning curve of less than 5 minutes.

### Deliverables

1. **MVP (Minimum Viable Product)**:
   - User authentication (phone/email with Firebase)
   - Event creation and management
   - AI-powered suggestions
   - Group chat and RSVP system
   - Real-time notifications and reminders

### UI/UX Design

1. **Get Started Page**
   - **App Name**: "Timi" with a green-themed background.
   - **Get Started Button**: Proceed to login.

2. **Login Page**
   - **Phone/Email Input**: Enter phone/email.
   - **Firebase Authentication**: Login via Firebase.
   - **Voice Input**: Microphone icon for voice input.

3. **Home Page**
   - **AI Suggestions**: Display suggestions on the left.
   - **Input Prompt**: On the right with voice input.
   - **Theme Color**: Emerald green.
