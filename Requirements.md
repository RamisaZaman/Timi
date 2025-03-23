Here’s the updated **Timi App Documentation** with the removal of the AI's ability to create events. The AI will now only provide suggestions, and users will manually create events based on those suggestions.

---

## **Timi App Documentation (Final Update)**

### **1. Overview**
Timi is a cross-platform mobile app designed to help users plan and organize quality time with friends and family. It leverages AI-powered suggestions (Google Gemma 3 27B) to generate personalized plans and simplifies event creation and management. Firebase will handle authentication, database storage, and notifications.

---

### **2. Functional Requirements**

#### **2.1 Get Started Page**
- **Logo**: Display the Timi logo prominently.
- **Button**: A "Get Started" button to navigate to the login/sign-up page.

#### **2.2 Login/Sign-Up Page**
- **Authentication Options**:
  - Phone number (with OTP verification via Firebase Auth).
  - Email (with password and OTP verification via Firebase Auth).
- **Firebase Integration**:
  - Store user info (name, email, phone, profile pic) in Firestore.

#### **2.3 Home Page**
- **Features**:
  - **AI Suggestion Icon**: Opens a chat screen for AI-powered suggestions.
  - **Event Create Option**: Opens a form to create events manually.
  - **Contacts Page Icon**: Displays all added contacts.
  - **Activity Icon**: Displays past events (moved from the dashboard after 1 day).
  - **Settings Icon**: Navigates to the profile and settings page.
- **Preferences**:
  - **Not shown on the home screen**.
  - Preferences survey appears **only once after login**.
  - Users can edit preferences later via the **Settings Page**.

#### **2.4 AI Suggestion Chat Screen**
- **Chat Interface**:
  - AI-generated text appears on the left, user input on the right.
  - Voice input option in the input prompt.
  - **Gemma 3 API Integration**:
    - Fetch suggestions using the provided API key.
    - Generate quality time plans based on user preferences.
  - **Exit Button**: Returns to the home screen.
- **AI Role**:
  - The AI will **only provide suggestions** and will **not create events**.
  - Users can manually create events based on the AI's suggestions.

#### **2.5 Preference Survey**
- **Trigger**:
  - Appears **only once after the first login**.
- **Questions**:
  - 15-20 mini questions with 3-5 options each.
  - Topics: Interests, personality, budget, activity preferences.
- **Save**:
  - Save preferences to Firestore.
- **Edit**:
  - Users can edit preferences later via the **Settings Page**.

#### **2.6 Event Creation Form**
- **Fields**:
  - Event Title
  - Date and Time
  - Location (manual input or map selection)
  - People (add from contacts or via email/phone)
  - Plan Checklist
- **Create Button**:
  - Saves event details to Firestore.
  - Displays the event on the home screen dashboard.

#### **2.7 Event Screen**
- **Details**:
  - Event Title, Date, Time, Location, Plan Checklist.
  - People Added: Names of attendees.
- **RSVP Options**:
  - Confirm / Not Available / Maybe.
  - People Icon: Displays the number of confirmed attendees.
  - Clicking the icon shows the list of confirmed attendees.

#### **2.8 Activity Page**
- **Features**:
  - Events disappear from the dashboard 1 day after completion.
  - Completed events are moved to the Activity Page.
  - Users can view past events, including details and attendees.

#### **2.9 Contacts Page**
- **Features**:
  - Display all added contacts.
  - Add new contacts (requires app installation for full functionality).
  - Send event invites via email/phone (non-users get a download link).

#### **2.10 Settings Page**
- **Features**:
  - **Edit Preferences**: Users can edit their saved preferences.
  - **Edit Profile**: Update name, profile picture, and other info.
  - **Log Out**: Sign out of the app.

---

### **3. Technical Specifications**

#### **3.1 Technology Stack**
- **Frontend**: React Native (Expo) for cross-platform development.
- **Backend**: Firebase (Authentication, Firestore, Cloud Messaging).
- **AI Integration**: Google Gemma 3 27B via OpenRouter API.
- **Maps Integration**: Google Maps API for location selection and directions.
- **Push Notifications**: Firebase Cloud Messaging (FCM) for reminders and updates.

#### **3.2 Firebase Database Structure**
- **Users Collection**:
  - `userId` (Document)
    - `name`, `email`, `phone`, `profilePic`, `preferences`.
- **Events Collection**:
  - `eventId` (Document)
    - `title`, `date`, `time`, `location`, `checklist`, `attendees`, `organizerId`.
    - `status`: "upcoming" or "completed".
- **Activity Collection**:
  - `userId` (Document)
    - `eventId`: References events that have been completed.
- **Contacts Collection**:
  - `userId` (Document)
    - `contacts`: List of added contacts (name, email, phone).

#### **3.3 API Integration**
- **Gemma 3 API**:
  - Endpoint: `https://openrouter.ai/api/v1/chat/completions`
  - Authorization: Use the provided API key.
  - Request Body: Include user input and preferences for suggestions.
- **Firebase APIs**:
  - Authentication (Phone/Email with OTP).
  - Firestore (Store user data, preferences, events, contacts).
  - Cloud Messaging (Push notifications for reminders and updates).

#### **3.4 Platforms**
- iOS
- Android

---

### **4. User Flow**

1. **Onboarding**:
   - User opens the app and sees the "Get Started" page.
   - Clicks "Get Started" and navigates to the login/sign-up page.
   - Authenticates via phone/email and sets up a profile.

2. **Preferences Survey**:
   - Appears **only once after the first login**.
   - User completes the survey to save preferences.
   - Preferences are saved to Firestore.

3. **Home Screen**:
   - User sees the dashboard with options for AI suggestions, event creation, contacts, activity, and settings.
   - **Preferences option is not shown on the home screen**.

4. **AI Suggestions**:
   - User clicks the AI icon and interacts with the chat to generate plans.
   - The AI provides suggestions, and the user can manually create events based on those suggestions.

5. **Event Creation**:
   - User fills out the event form and adds attendees.
   - Event is saved and displayed on the dashboard.

6. **Event Management**:
   - Attendees RSVP via the app.
   - Organizer views confirmed attendees and event details.

7. **Activity Page**:
   - Completed events are moved to the Activity Page after 1 day.
   - Users can view past events and details.

8. **Contacts**:
   - User adds and manages contacts.
   - Sends event invites to non-users via email/phone.

9. **Settings**:
   - User can edit preferences, update profile info, and log out.

---

### **5. Non-Functional Requirements**
- **Performance**: App should load in under 3 seconds.
- **Security**: Secure authentication and data encryption.
- **Scalability**: Firebase backend should support up to 10,000 concurrent users.
- **Usability**: Intuitive UI/UX with a learning curve of less than 5 minutes.

---

### **6. Deliverables**
1. **MVP Features**:
   - User authentication (phone/email with OTP).
   - AI-powered suggestions (no event creation by AI).
   - Event management (RSVP, reminders, notifications).
   - Preference survey (appears once after login, editable via settings).
   - Activity page for past events.
   - Contacts and settings management.

2. **UI/UX**:
   - Modern design with emerald-themed colors.
   - Minimalistic and intuitive interface.

3. **Testing**:
   - Unit testing for core functionalities.
   - User testing for feedback on UI/UX.

---

### **7. Future Enhancements**
- **AI-Powered Itinerary Planning**: Generate multi-day event plans.
- **Group Polls**: Allow voting on activity options.
- **Premium Features**: Advanced analytics, custom themes, ad-free experience.
- **Smart Device Integration**: Sync with smart home devices for reminders.

